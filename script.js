// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Make sure data.js has defined "installerData"
  const data = installerData;
  const programmingList = document.getElementById("programmingList");
  const searchBox = document.getElementById("searchBox");
  const searchButton = document.getElementById("searchButton");
  const generateButton = document.getElementById("generateButton");
  const outputText = document.getElementById("outputText");

  // 1. Build the tree
  buildTree(data, programmingList);

  // 2. Set up the Search
  searchButton.addEventListener("click", () => {
    clearHighlights();
    collapseAll();
    const query = searchBox.value.trim();
    if (!query) return;
    performSearch(query);
  });

  // 3. Set up the Generate
  generateButton.addEventListener("click", () => {
    const resultText = buildSelectedHierarchy(programmingList, 0);
    outputText.value = resultText;
  });

  // 4. Whenever a child is checked, automatically check its parents
  programmingList.addEventListener("change", (e) => {
    if (e.target.matches(".itemCheckbox")) {
      if (e.target.checked) {
        checkParents(e.target);
      }
    }
  });

  /****************************************************************
   * buildTree(obj, container)
   * Recursively creates the collapsible UI
   ****************************************************************/
  function buildTree(obj, container) {
    Object.keys(obj).forEach((key) => {
      const val = obj[key];

      // Outer wrapper
      const sectionDiv = document.createElement("div");
      sectionDiv.classList.add("section");
      container.appendChild(sectionDiv);

      // Header
      const headerDiv = document.createElement("div");
      headerDiv.classList.add("section-header");
      sectionDiv.appendChild(headerDiv);

      // Checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("itemCheckbox");
      headerDiv.appendChild(checkbox);

      // Toggle button (+/-)
      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "+";
      headerDiv.appendChild(toggleBtn);

      // Label
      const labelSpan = document.createElement("span");
      labelSpan.textContent = key;
      headerDiv.appendChild(labelSpan);

      // Info button (i)
      const infoBtn = document.createElement("span");
      infoBtn.style.marginLeft = "8px";
      infoBtn.style.color = "blue";
      infoBtn.style.cursor = "pointer";
      infoBtn.textContent = "(i)";
      infoBtn.title = "Show description (if any)";
      infoBtn.addEventListener("click", () => {
        alert("No description available for: " + key);
      });
      headerDiv.appendChild(infoBtn);

      // Section content (children)
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("section-content");
      sectionDiv.appendChild(contentDiv);

      // If val is an object, recurse. Otherwise it's a leaf.
      if (typeof val === "object" && val !== null) {
        buildTree(val, contentDiv);

        // Expand/collapse
        toggleBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (contentDiv.classList.contains("open")) {
            contentDiv.classList.remove("open");
            toggleBtn.textContent = "+";
          } else {
            contentDiv.classList.add("open");
            toggleBtn.textContent = "-";
          }
        });
      } else {
        // Leaf => no children
        toggleBtn.textContent = "-";
        toggleBtn.disabled = true;
      }
    });
  }

  /****************************************************************
   * performSearch(query)
   *  - Collapses all
   *  - Only expands items containing *all* search words
   *  - Only highlights those items
   ****************************************************************/
  function performSearch(query) {
    const tokens = query.toLowerCase().split(/\s+/);
    const allHeaders = programmingList.querySelectorAll(".section-header");

    allHeaders.forEach((headerDiv) => {
      const labelSpan = headerDiv.querySelector("span:not([style])");
      if (!labelSpan) return;
      const text = labelSpan.textContent.toLowerCase();

      const isMatch = tokens.every(t => text.includes(t));
      if (isMatch) {
        highlightSpan(labelSpan, tokens);
        expandParents(headerDiv);
      }
    });
  }

  /****************************************************************
   * highlightSpan(span, tokens)
   * Wraps matched tokens in <span class="highlight">
   ****************************************************************/
  function highlightSpan(span, tokens) {
    let html = span.textContent;
    tokens.forEach((t) => {
      const regex = new RegExp(t, "gi");
      html = html.replace(regex, (m) => `<span class="highlight">${m}</span>`);
    });
    span.innerHTML = html;
  }

  /****************************************************************
   * expandParents(headerDiv)
   * Climb upward and add .open to each .section-content
   ****************************************************************/
  function expandParents(headerDiv) {
    let currentSection = headerDiv.closest(".section");
    while (currentSection) {
      const parentContent = currentSection.parentElement;
      if (parentContent && parentContent.classList.contains("section-content")) {
        parentContent.classList.add("open");

        // Also set the parent's toggle to "-"
        const parentHeader = parentContent.previousElementSibling;
        if (parentHeader) {
          const btn = parentHeader.querySelector("button");
          if (btn && !btn.disabled) {
            btn.textContent = "-";
          }
        }
      }
      currentSection = parentContent?.closest(".section");
    }
  }

  /****************************************************************
   * clearHighlights()
   * Remove all .highlight elements
   ****************************************************************/
  function clearHighlights() {
    const highlights = programmingList.querySelectorAll(".highlight");
    highlights.forEach(h => {
      h.outerHTML = h.textContent;
    });
  }

  /****************************************************************
   * collapseAll()
   * Collapses all .section-content
   ****************************************************************/
  function collapseAll() {
    const allContent = programmingList.querySelectorAll(".section-content");
    allContent.forEach(div => {
      div.classList.remove("open");
    });
    const allToggles = programmingList.querySelectorAll(".section-header button");
    allToggles.forEach(btn => {
      if (!btn.disabled) btn.textContent = "+";
    });
  }

  /****************************************************************
   * checkParents(childCheckbox)
   * If a child is checked, also check all of its ancestors
   ****************************************************************/
  function checkParents(childCheckbox) {
    let parent = childCheckbox.closest(".section").parentElement;
    while (parent && parent.id !== "programmingList") {
      const parentSection = parent.closest(".section");
      if (parentSection) {
        const parentCheckbox = parentSection.querySelector(".itemCheckbox");
        if (parentCheckbox) {
          parentCheckbox.checked = true;
        }
      }
      parent = parentSection?.parentElement;
    }
  }

  /****************************************************************
   * buildSelectedHierarchy(container, depth)
   * Recursively scan each .section in 'container'.
   * If the .section's checkbox is checked *or* any child is included,
   * we add its label (indented to 'depth') to the output,
   * then recursively do the children.
   ****************************************************************/
  function buildSelectedHierarchy(container, depth) {
    let result = "";
    // Only look at .section elements that are direct children of 'container'
    const sections = container.querySelectorAll(":scope > .section");

    sections.forEach(section => {
      const header = section.querySelector(":scope > .section-header");
      const content = section.querySelector(":scope > .section-content");
      const checkbox = header.querySelector(".itemCheckbox");

      // Recursively build children's text
      const childrenText = buildSelectedHierarchy(content, depth + 1);

      // If this node is checked or the children have lines
      if (checkbox.checked || childrenText.trim().length > 0) {
        // Add our own line, then append children lines
        const labelSpan = header.querySelector("span:not([style])");
        const label = labelSpan ? labelSpan.textContent.trim() : "[No label]";

        // Indent 4 spaces per depth level
        result += " ".repeat(depth * 4) + label + "\n";
        result += childrenText;
      }
    });
    return result;
  }
});
