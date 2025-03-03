// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Make sure "installerData" is defined in data.js, which is loaded before this script
  const data = installerData; 
  const programmingList = document.getElementById("programmingList");
  const searchBox = document.getElementById("searchBox");
  const searchButton = document.getElementById("searchButton");
  const generateButton = document.getElementById("generateButton");
  const outputText = document.getElementById("outputText");
  const selectWithParentsCb = document.getElementById("selectWithParents");

  // Build the tree UI
  buildTree(data, programmingList);

  // --- Search button ---
  searchButton.addEventListener("click", () => {
    clearHighlights(); 
    collapseAll();
    const query = searchBox.value.trim();
    if (!query) return;
    performSearch(query);
  });

  // --- Generate button ---
  generateButton.addEventListener("click", () => {
    const textResult = generateIndentedList();
    outputText.value = textResult;
  });

  // --- If "Select With Parents" is checked, checking a child also checks its parents ---
  programmingList.addEventListener("change", (e) => {
    if (e.target.matches(".itemCheckbox")) {
      if (selectWithParentsCb && selectWithParentsCb.checked && e.target.checked) {
        selectParents(e.target);
      }
    }
  });

  /********************************************************
   * 1. BUILD TREE
   ********************************************************/
  function buildTree(obj, container) {
    // Each key in the object => one "section"
    Object.keys(obj).forEach((key) => {
      const val = obj[key];

      // sectionDiv wraps the header + content
      const sectionDiv = document.createElement("div");
      sectionDiv.classList.add("section");
      container.appendChild(sectionDiv);

      // section-header
      const headerDiv = document.createElement("div");
      headerDiv.classList.add("section-header");
      sectionDiv.appendChild(headerDiv);

      // Checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("itemCheckbox");
      headerDiv.appendChild(checkbox);

      // Expand/collapse button
      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "+";
      headerDiv.appendChild(toggleBtn);

      // The main label
      const labelSpan = document.createElement("span");
      labelSpan.textContent = key;
      headerDiv.appendChild(labelSpan);

      // (i) info button
      const infoBtn = document.createElement("span");
      infoBtn.style.marginLeft = "8px";
      infoBtn.style.color = "blue";
      infoBtn.style.cursor = "pointer";
      infoBtn.textContent = "(i)";
      infoBtn.title = "Show description (if any)";
      infoBtn.addEventListener("click", () => {
        // For now, just a placeholder
        alert("No description available for: " + key);
      });
      headerDiv.appendChild(infoBtn);

      // Content (children) container
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("section-content");
      sectionDiv.appendChild(contentDiv);

      // If this key is an object, recurse. Otherwise it's a leaf.
      if (typeof val === "object" && val !== null) {
        // Build children
        buildTree(val, contentDiv);

        // Toggle open/close
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
        // It's a leaf, no children
        toggleBtn.textContent = "-";
        toggleBtn.disabled = true;
      }
    });
  }

  /********************************************************
   * 2. SEARCH
   *    - Collapse everything first
   *    - Only expand the chain of parents for matched items
   *    - Highlight only the matched text in those items
   ********************************************************/
  function performSearch(query) {
    // Split query into tokens
    const tokens = query.toLowerCase().split(/\s+/);

    // Look at each .section-header for a label
    const allHeaders = programmingList.querySelectorAll(".section-header");
    allHeaders.forEach((headerDiv) => {
      // The main label is the first <span> that doesn't have inline style
      // (The infoBtn has style, so we skip it using :not([style]))
      const labelSpan = headerDiv.querySelector("span:not([style])");
      if (!labelSpan) return;

      // See if label contains all tokens
      const text = labelSpan.textContent.toLowerCase();
      const isMatch = tokens.every((t) => text.includes(t));
      if (isMatch) {
        // Highlight only this label
        highlightSpan(labelSpan, tokens);

        // Expand the parent chain so it's visible
        expandParents(headerDiv);
      }
    });
  }

  // Highlight the matched tokens in the given span
  function highlightSpan(span, tokens) {
    let html = span.textContent;
    tokens.forEach((t) => {
      const regex = new RegExp(t, "gi");
      html = html.replace(regex, (matched) => `<span class="highlight">${matched}</span>`);
    });
    span.innerHTML = html;
  }

  // Expand all parent .section-content for the given header
  function expandParents(headerDiv) {
    let currentSection = headerDiv.closest(".section");
    while (currentSection && currentSection.id !== "programmingList") {
      const parentContent = currentSection.parentElement;
      if (parentContent && parentContent.classList.contains("section-content")) {
        parentContent.classList.add("open");

        // Also set the parent's toggle button to "-"
        const parentHeader = parentContent.previousElementSibling;
        if (parentHeader) {
          const toggleBtn = parentHeader.querySelector("button");
          if (toggleBtn && !toggleBtn.disabled) {
            toggleBtn.textContent = "-";
          }
        }
      }
      currentSection = parentContent?.closest(".section");
    }
  }

  // Clear existing highlights
  function clearHighlights() {
    const highlights = programmingList.querySelectorAll(".highlight");
    highlights.forEach(h => {
      h.outerHTML = h.textContent;
    });
  }

  // Collapse everything to a "closed" state
  function collapseAll() {
    const allContents = programmingList.querySelectorAll(".section-content");
    allContents.forEach(div => {
      div.classList.remove("open");
    });
    const allToggles = programmingList.querySelectorAll(".section-header button");
    allToggles.forEach(btn => {
      if (!btn.disabled) btn.textContent = "+";
    });
  }

  /********************************************************
   * 3. CHECK PARENTS IF A CHILD IS CHECKED
   ********************************************************/
  function selectParents(checkbox) {
    // Climb upward looking for .section
    let parent = checkbox.closest(".section").parentElement;
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
   * 4. GENERATE INDENTED LIST FOR SELECTED ITEMS
   ********************************************************/
  function generateIndentedList() {
    const checkedItems = programmingList.querySelectorAll(".itemCheckbox:checked");
    if (!checkedItems.length) return "";

    const itemsInfo = [];
    checkedItems.forEach((chk) => {
      const sectionHeader = chk.parentElement;
      // Depth = how many parent .section-content wrappers we have
      let depth = 0;
      let p = chk.closest(".section-content");
      while (p) {
        depth++;
        p = p.parentElement?.closest(".section-content");
      }
      // The label is again the first <span> not styled
      const labelSpan = sectionHeader.querySelector("span:not([style])");
      const label = labelSpan ? labelSpan.textContent.trim() : "[No label]";
      itemsInfo.push({ depth, label });
    });

    // Sort by depth (lowest to highest)
    itemsInfo.sort((a, b) => a.depth - b.depth);

    let result = "";
    itemsInfo.forEach(item => {
      // Indent: 4 spaces per level beyond 1
      result += " ".repeat((item.depth - 1) * 4) + item.label + "\n";
    });
    return result;
  }
});
