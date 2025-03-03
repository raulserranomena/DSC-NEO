// script.js

document.addEventListener("DOMContentLoaded", function () {
  // data.js defines "installerData"
  const data = installerData; 
  const programmingList = document.getElementById("programmingList");
  const searchBox = document.getElementById("searchBox");
  const searchButton = document.getElementById("searchButton");
  const generateButton = document.getElementById("generateButton");
  const outputText = document.getElementById("outputText");
  const selectWithParentsCb = document.getElementById("selectWithParents");

  // 1) Build the entire tree
  buildTree(data, programmingList);

  // 2) Search button
  searchButton.addEventListener("click", () => {
    clearHighlights();
    collapseAll();
    const query = searchBox.value.trim();
    if (!query) return;
    performSearch(query);
  });

  // 3) Generate button
  generateButton.addEventListener("click", () => {
    const textResult = generateIndentedList();
    outputText.value = textResult;
  });

  // 4) "Select With Parents" logic
  programmingList.addEventListener("change", (e) => {
    if (e.target.matches(".itemCheckbox")) {
      if (selectWithParentsCb && selectWithParentsCb.checked && e.target.checked) {
        selectParents(e.target);
      }
    }
  });

  /********************************************************
   * buildTree(obj, container)
   * Recursively create HTML elements from the JSON
   ********************************************************/
  function buildTree(obj, container) {
    Object.keys(obj).forEach((key) => {
      const val = obj[key];

      // Outer wrapper
      const sectionDiv = document.createElement("div");
      sectionDiv.classList.add("section");
      container.appendChild(sectionDiv);

      // Header row
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

      // Child container
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("section-content");
      sectionDiv.appendChild(contentDiv);

      // If 'val' is an object, recurse. Otherwise it's a leaf.
      if (typeof val === "object" && val !== null) {
        buildTree(val, contentDiv);

        // Expand/collapse logic
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

  /********************************************************
   * performSearch(query)
   *  - Collapses everything
   *  - Finds items containing *all* tokens
   *  - Highlights that label, expands its parent chain
   ********************************************************/
  function performSearch(query) {
    const tokens = query.toLowerCase().split(/\s+/);

    const allHeaders = programmingList.querySelectorAll(".section-header");
    allHeaders.forEach((headerDiv) => {
      const labelSpan = headerDiv.querySelector("span:not([style])");
      if (!labelSpan) return;
      const text = labelSpan.textContent.toLowerCase();

      // Check if all tokens appear
      const isMatch = tokens.every((t) => text.includes(t));
      if (isMatch) {
        // Highlight only this label
        highlightSpan(labelSpan, tokens);
        // Expand parents so it's visible
        expandParents(headerDiv);
      }
    });
  }

  /********************************************************
   * highlightSpan(span, tokens)
   * Replaces each matched token with <span class="highlight">
   ********************************************************/
  function highlightSpan(span, tokens) {
    let html = span.textContent;
    tokens.forEach((t) => {
      const regex = new RegExp(t, "gi");
      html = html.replace(regex, (matched) => `<span class="highlight">${matched}</span>`);
    });
    span.innerHTML = html;
  }

  /********************************************************
   * expandParents(headerDiv)
   * Walk upward, adding .open to each ancestor .section-content
   ********************************************************/
  function expandParents(headerDiv) {
    let currentSection = headerDiv.closest(".section");
    while (currentSection) {
      const parentContent = currentSection.parentElement;
      if (parentContent && parentContent.classList.contains("section-content")) {
        parentContent.classList.add("open");

        // Switch parent's toggle to "-"
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

  /********************************************************
   * clearHighlights()
   * Removes <span class="highlight"> wrappers
   ********************************************************/
  function clearHighlights() {
    const highlights = programmingList.querySelectorAll(".highlight");
    highlights.forEach(h => {
      h.outerHTML = h.textContent; // revert to plain text
    });
  }

  /********************************************************
   * collapseAll()
   * Collapse every .section-content
   ********************************************************/
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
   * selectParents(checkbox)
   * If "select with parents" is on and a child is checked,
   * we also check all ancestor sections
   ********************************************************/
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

  /********************************************************
   * generateIndentedList()
   * Gather all checked items & produce text with indentation
   ********************************************************/
  function generateIndentedList() {
    const checkedItems = programmingList.querySelectorAll(".itemCheckbox:checked");
    if (!checkedItems.length) return "";

    const itemsInfo = [];
    checkedItems.forEach((chk) => {
      const headerDiv = chk.parentElement;
      let depth = 0;

      // Count how many .section-content ancestors we have
      let p = chk.closest(".section-content");
      while (p) {
        depth++;
        p = p.parentElement?.closest(".section-content");
      }

      // The label is typically the first <span> not styled
      const labelSpan = headerDiv.querySelector("span:not([style])");
      const label = labelSpan ? labelSpan.textContent.trim() : "[No label]";

      itemsInfo.push({ depth, label });
    });

    // Sort by ascending depth
    itemsInfo.sort((a, b) => a.depth - b.depth);

    let result = "";
    itemsInfo.forEach(item => {
      // Indent: 4 spaces per level
      result += " ".repeat((item.depth - 1) * 4) + item.label + "\n";
    });

    return result;
  }
});
