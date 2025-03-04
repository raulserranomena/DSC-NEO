// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Make sure data.js defines "installerData"
  const data = installerData;
  const programmingList = document.getElementById("programmingList");
  const searchBox = document.getElementById("searchBox");
  const searchButton = document.getElementById("searchButton");
  const clearButton = document.getElementById("clearButton");
  const generateButton = document.getElementById("generateButton");
  const outputText = document.getElementById("outputText");

  // 1. Build the collapsible tree
  buildTree(data, programmingList);

  // 2. Search button OR pressing Enter inside the search box
  searchButton.addEventListener("click", doSearch);
  searchBox.addEventListener("keydown", (e) => {
    // If the user is focused in the search box and presses Enter, doSearch
    if (e.key === "Enter") {
      e.preventDefault(); // optionally prevent any default form submit
      doSearch();
    }
  });

  // 3. Clear button
  clearButton.addEventListener("click", () => {
    // Clear the search box
    searchBox.value = "";
    // Clear highlights
    clearHighlights();
    // Collapse everything
    collapseAll();
    // Uncheck everything
    uncheckAll();
    // Clear the generated text
    outputText.value = "";
  });

  // 4. Generate button
  generateButton.addEventListener("click", () => {
    const resultText = buildSelectedHierarchy(programmingList, 0);
    outputText.value = resultText;
  });

  // 5. Whenever a child is checked, we auto-check its parents
  programmingList.addEventListener("change", (e) => {
    if (e.target.matches(".itemCheckbox")) {
      if (e.target.checked) {
        checkParents(e.target);
      }
    }
  });

  /********************************************************
   * doSearch()
   * Clears all checks, collapses & highlights only matched items
   ********************************************************/
  function doSearch() {
    // If the user typed nothing, do nothing
    const query = searchBox.value.trim();
    if (!query) return;

    // Clear previous selections
    uncheckAll();

    // Clear old highlights, collapse all
    clearHighlights();
    collapseAll();

    // Perform the search
    performSearch(query);
  }

  /********************************************************
   * buildTree(obj, container)
   * Recursively create the collapsible UI
   ********************************************************/
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

      // Section content
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("section-content");
      sectionDiv.appendChild(contentDiv);

      // If val is an object, recurse; else it's a leaf
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
        // Leaf node
        toggleBtn.textContent = "-";
        toggleBtn.disabled = true;
      }
    });
  }

  /********************************************************
   * performSearch(query)
   *  - Finds items containing *all* search words
   *  - Highlight only those items
   *  - Expand their parents
   ********************************************************/
  function performSearch(query) {
    const tokens = query.toLowerCase().split(/\s+/);
    const allHeaders = programmingList.querySelectorAll(".section-header");

    allHeaders.forEach((headerDiv) => {
      const labelSpan = headerDiv.querySelector("span:not([style])");
      if (!labelSpan) return;
      const text = labelSpan.textContent.toLowerCase();

      // Must contain all tokens
      const isMatch = tokens.every(t => text.includes(t));
      if (isMatch) {
        highlightSpan(labelSpan, tokens);
        expandParents(headerDiv);
      }
    });
  }

  /********************************************************
   * highlightSpan(span, tokens)
   * Wraps matched tokens with <span class="highlight">
   ********************************************************/
  function highlightSpan(span, tokens) {
    let html = span.textContent;
    tokens.forEach((t) => {
      const regex = new RegExp(t, "gi");
      html = html.replace(regex, (m) => `<span class="highlight">${m}</span>`);
    });
    span.innerHTML = html;
  }

  /********************************************************
   * expandParents(headerDiv)
   * Climb upward and add .open to each .section-content
   ********************************************************/
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

  /********************************************************
   * clearHighlights()
   * Removes all <span class="highlight"> wrappers
   ********************************************************/
  function clearHighlights() {
    const highlights = programmingList.querySelectorAll(".highlight");
    highlights.forEach(h => {
      h.outerHTML = h.textContent;
    });
  }

  /********************************************************
   * collapseAll()
   * Collapses all .section-content
   ********************************************************/
  function collapseAll() {
    const allContent = programmingList.querySelectorAll(".section-content");
    allContent.forEach(div => {
      div.classList.remove("open");
    });
    const allToggles = programmingList.querySelectorAll(".section-header button");
    allToggles.forEach(btn => {
      if (!btn.disabled) {
        btn.textContent = "+";
      }
    });
  }

  /********************************************************
   * uncheckAll()
   * Unchecks every checkbox in the tree
   ********************************************************/
  function uncheckAll() {
    const checkboxes = programmingList.querySelectorAll(".itemCheckbox");
    checkboxes.forEach(chk => {
      chk.checked = false;
    });
  }

  /********************************************************
   * checkParents(childCheckbox)
   * If a child is checked, also check all of its ancestors
   ********************************************************/
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

  /********************************************************
   * buildSelectedHierarchy(container, depth)
   * Recursively scan each .section. If the .section’s
   * checkbox is checked OR any child is included,
   * we add its label (properly indented) to result,
   * then recurse its children.
   ********************************************************/
  function buildSelectedHierarchy(container, depth) {
    let result = "";
    // Only look at .section elements that are direct children
    const sections = container.querySelectorAll(":scope > .section");

    sections.forEach(section => {
      const header = section.querySelector(":scope > .section-header");
      const content = section.querySelector(":scope > .section-content");
      const checkbox = header.querySelector(".itemCheckbox");

      // Recurse children
      const childrenText = buildSelectedHierarchy(content, depth + 1);

      // If this node is checked or the children have lines
      if (checkbox.checked || childrenText.trim().length > 0) {
        const labelSpan = header.querySelector("span:not([style])");
        const label = labelSpan ? labelSpan.textContent.trim() : "[No label]";

        // Indent 4 spaces per level
        result += " ".repeat(depth * 4) + label + "\n";
        result += childrenText;
      }
    });
    return result;
  }
});
