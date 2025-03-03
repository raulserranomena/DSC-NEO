// script.js

document.addEventListener("DOMContentLoaded", function () {
  const data = installerData; // from data.js
  const programmingList = document.getElementById("programmingList");
  const searchBox = document.getElementById("searchBox");
  const searchButton = document.getElementById("searchButton");
  const generateButton = document.getElementById("generateButton");
  const outputText = document.getElementById("outputText");
  const selectWithParentsCb = document.getElementById("selectWithParents");

  // Build the collapsible tree
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

  // --- If "Select with Parents" is checked, checking a child also checks its parents ---
  programmingList.addEventListener("change", (e) => {
    if (e.target.matches(".itemCheckbox")) {
      if (selectWithParentsCb.checked && e.target.checked) {
        selectParents(e.target);
      }
    }
  });

  /****************************************************************
   * Recursive tree builder
   ****************************************************************/
  function buildTree(obj, container) {
    Object.keys(obj).forEach((key) => {
      const val = obj[key];

      const sectionDiv = document.createElement("div");
      sectionDiv.classList.add("section");
      container.appendChild(sectionDiv);

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

      // Label
      const labelSpan = document.createElement("span");
      labelSpan.textContent = key;
      headerDiv.appendChild(labelSpan);

      // Info button
      const infoBtn = document.createElement("span");
      infoBtn.style.marginLeft = "8px";
      infoBtn.style.color = "blue";
      infoBtn.style.cursor = "pointer";
      infoBtn.textContent = "(i)";
      infoBtn.title = "Show description (if any)";
      infoBtn.addEventListener("click", function() {
        alert("No description available for: " + key);
      });
      headerDiv.appendChild(infoBtn);

      // The children container
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("section-content");
      sectionDiv.appendChild(contentDiv);

      if (typeof val === "object" && val !== null) {
        buildTree(val, contentDiv);

        // Toggle button listener
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

  /****************************************************************
   * Search / Highlight
   ****************************************************************/
  function performSearch(query) {
    // Split query into tokens
    const tokens = query.toLowerCase().split(/\s+/);

    // We'll look at each .section-header's label span
    const allHeaders = programmingList.querySelectorAll(".section-header");
    allHeaders.forEach((headerDiv) => {
      // The label is in the first <span> after the button or so
      const labelSpan = headerDiv.querySelector("span:not([style])");
      if (!labelSpan) return;

      const text = labelSpan.textContent.toLowerCase();
      // Check if *all* tokens appear in this text
      const isMatch = tokens.every((t) => text.includes(t));
      if (isMatch) {
        // This is a match => highlight *only* this labelSpan
        highlightSpan(labelSpan, tokens);

        // Expand this item's parent chain so it's visible
        expandParents(headerDiv);
      }
    });
  }

  function highlightSpan(span, tokens) {
    let html = span.textContent;
    tokens.forEach((t) => {
      const regex = new RegExp(t, "gi");
      html = html.replace(regex, (matched) => `<span class="highlight">${matched}</span>`);
    });
    span.innerHTML = html;
  }

  // Collapses all .section-content
  function collapseAll() {
    const allContent = programmingList.querySelectorAll(".section-content");
    allContent.forEach(div => {
      div.classList.remove("open");
    });
    const allButtons = programmingList.querySelectorAll(".section-header button");
    allButtons.forEach(btn => {
      if (!btn.disabled) btn.textContent = "+";
    });
  }

  function expandParents(headerDiv) {
    // Expand the parent .section-content up the tree
    let currentSection = headerDiv.closest(".section");
    while (currentSection && currentSection.id !== "programmingList") {
      const parentContent = currentSection.parentElement;
      if (!parentContent) break;

      // If the parent is a .section-content, open it
      if (parentContent.classList.contains("section-content")) {
        parentContent.classList.add("open");
        // Also flip the parent's toggle button to "-"
        const parentHeader = parentContent.previousElementSibling;
        if (parentHeader && parentHeader.querySelector("button")) {
          const toggleBtn = parentHeader.querySelector("button");
          if (!toggleBtn.disabled) toggleBtn.textContent = "-";
        }
      }
      currentSection = parentContent.closest(".section");
    }
  }

  function clearHighlights() {
    const highlights = programmingList.querySelectorAll(".highlight");
    highlights.forEach(h => {
      h.outerHTML = h.textContent;
    });
  }

  /****************************************************************
   * Check parents if a child is checked
   ****************************************************************/
  function selectParents(checkbox) {
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

  /****************************************************************
   * Generate Indented List of all checked items
   ****************************************************************/
  function generateIndentedList() {
    const checkedItems = programmingList.querySelectorAll(".itemCheckbox:checked");
    if (!checkedItems.length) return "";

    const itemsInfo = [];
    checkedItems.forEach((chk) => {
      const sectionHeader = chk.parentElement;
      let depth = 0;
      let p = chk.closest(".section-content");
      while (p) {
        depth++;
        p = p.parentElement?.closest(".section-content");
      }
      const labelSpan = sectionHeader.querySelector("span:not([style])");
      const label = labelSpan ? labelSpan.textContent.trim() : "[No label]";
      itemsInfo.push({ depth, label });
    });

    // Sort by depth
    itemsInfo.sort((a, b) => a.depth - b.depth);

    let result = "";
    itemsInfo.forEach((item) => {
      result += " ".repeat((item.depth - 1) * 4) + item.label + "\n";
    });

    return result;
  }
});
