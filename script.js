// script.js

document.addEventListener("DOMContentLoaded", () => {
  const data = installerData; // from data.js
  const programmingList = document.getElementById("programmingList");
  const searchBox = document.getElementById("searchBox");
  const searchButton = document.getElementById("searchButton");
  const clearButton = document.getElementById("clearButton");
  const collapseAllBtn = document.getElementById("collapseAllBtn");
  const generateButton = document.getElementById("generateButton");
  const outputText = document.getElementById("outputText");

  // 1. Build the tree
  buildTree(data, programmingList);

  // 2. Search & Enter key
  searchButton.addEventListener("click", doSearch);
  searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      doSearch();
    }
  });

  // 3. Clear
  clearButton.addEventListener("click", () => {
    searchBox.value = "";
    clearHighlights();
    collapseAll();
    uncheckAll();
    outputText.value = "";
  });

  // 4. Collapse All
  collapseAllBtn.addEventListener("click", collapseAll);

  // 5. Generate
  generateButton.addEventListener("click", () => {
    const resultText = buildSelectedHierarchy(programmingList, 0);
    outputText.value = resultText;
  });

  // 6. Check parents on child check
  programmingList.addEventListener("change", (e) => {
    if (e.target.matches(".itemCheckbox") && e.target.checked) {
      checkParents(e.target);
    }
  });

  /********************************************************
   * doSearch()
   ********************************************************/
  function doSearch() {
    const query = searchBox.value.trim();
    if (!query) return;
    uncheckAll();
    clearHighlights();
    collapseAll();
    performSearch(query);
  }

  /********************************************************
   * buildTree(obj, container)
   ********************************************************/
  function buildTree(obj, container) {
    Object.keys(obj).forEach((key) => {
      if (key === "Description") return; // skip child node for "Description"

      const val = obj[key];
      let childDesc = "";

      if (typeof val === "object" && val !== null && "Description" in val) {
        childDesc = val.Description;
        delete val.Description;
      }

      const sectionDiv = document.createElement("div");
      sectionDiv.classList.add("section");
      container.appendChild(sectionDiv);

      const headerDiv = document.createElement("div");
      headerDiv.classList.add("section-header");
      sectionDiv.appendChild(headerDiv);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("itemCheckbox");
      headerDiv.appendChild(checkbox);

      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "+";
      headerDiv.appendChild(toggleBtn);

      const labelSpan = document.createElement("span");
      labelSpan.textContent = key;
      headerDiv.appendChild(labelSpan);

      const infoBtn = document.createElement("span");
      infoBtn.style.marginLeft = "8px";
      infoBtn.style.color = "blue";
      infoBtn.style.cursor = "pointer";
      infoBtn.textContent = "(i)";
      infoBtn.title = "Toggle description";
      headerDiv.appendChild(infoBtn);

      const contentDiv = document.createElement("div");
      contentDiv.classList.add("section-content");
      sectionDiv.appendChild(contentDiv);

      let descBox = null;
      if (childDesc) {
        descBox = document.createElement("div");
        descBox.classList.add("descBox");
        descBox.style.display = "none";
        descBox.textContent = childDesc;
        sectionDiv.insertBefore(descBox, contentDiv);
      }

      if (typeof val === "object" && val !== null) {
        buildTree(val, contentDiv);
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
        toggleBtn.textContent = "-";
        toggleBtn.disabled = true;
      }

      infoBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (descBox) {
          descBox.style.display = descBox.style.display === "none" ? "block" : "none";
        }
      });
    });
  }

  /********************************************************
   * performSearch(query)
   ********************************************************/
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

  /********************************************************
   * highlightSpan(span, tokens)
   ********************************************************/
  function highlightSpan(span, tokens) {
    let html = span.textContent;
    tokens.forEach(t => {
      const re = new RegExp(t, "gi");
      html = html.replace(re, match => `<span class="highlight">${match}</span>`);
    });
    span.innerHTML = html;
  }

  /********************************************************
   * expandParents(headerDiv)
   ********************************************************/
  function expandParents(headerDiv) {
    let section = headerDiv.closest(".section");
    while (section) {
      const parentContent = section.parentElement;
      if (parentContent && parentContent.classList.contains("section-content")) {
        parentContent.classList.add("open");
        const parentHeader = parentContent.previousElementSibling;
        if (parentHeader) {
          const btn = parentHeader.querySelector("button");
          if (btn && !btn.disabled) btn.textContent = "-";
        }
      }
      section = parentContent?.closest(".section");
    }
  }

  /********************************************************
   * clearHighlights()
   ********************************************************/
  function clearHighlights() {
    const highlights = programmingList.querySelectorAll(".highlight");
    highlights.forEach(h => {
      h.outerHTML = h.textContent;
    });
  }

  /********************************************************
   * collapseAll()
   ********************************************************/
  function collapseAll() {
    const allContents = programmingList.querySelectorAll(".section-content");
    allContents.forEach(div => div.classList.remove("open"));

    const allToggles = programmingList.querySelectorAll(".section-header button");
    allToggles.forEach(btn => {
      if (!btn.disabled) btn.textContent = "+";
    });
  }

  /********************************************************
   * uncheckAll()
   ********************************************************/
  function uncheckAll() {
    const checkboxes = programmingList.querySelectorAll(".itemCheckbox");
    checkboxes.forEach(ch => ch.checked = false);
  }

  /********************************************************
   * checkParents(childCheckbox)
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
   ********************************************************/
  function buildSelectedHierarchy(container, depth) {
    let result = "";
    const sections = container.querySelectorAll(":scope > .section");

    sections.forEach(section => {
      const header = section.querySelector(":scope > .section-header");
      const content = section.querySelector(":scope > .section-content");
      const checkbox = header.querySelector(".itemCheckbox");

      const childLines = buildSelectedHierarchy(content, depth + 1);

      if (checkbox.checked || childLines.trim().length > 0) {
        const labelSpan = header.querySelector("span:not([style])");
        const label = labelSpan ? labelSpan.textContent.trim() : "[No label]";
        result += " ".repeat(depth * 4) + label + "\n";
        result += childLines;
      }
    });
    return result;
  }
});
