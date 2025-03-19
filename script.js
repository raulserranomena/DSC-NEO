// script.js

document.addEventListener("DOMContentLoaded", function () {
  const data = installerData; // from data.js
  const programmingList = document.getElementById("programmingList");
  const searchBox = document.getElementById("searchBox");
  const searchButton = document.getElementById("searchButton");
  const clearButton = document.getElementById("clearButton");
  const generateButton = document.getElementById("generateButton");
  const outputText = document.getElementById("outputText");

  // Build the entire tree
  buildTree(data, programmingList);

  // --- Search button & "Enter" key in search box ---
  searchButton.addEventListener("click", doSearch);
  searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      doSearch();
    }
  });

  // --- Clear button ---
  clearButton.addEventListener("click", () => {
    searchBox.value = "";
    clearHighlights();
    collapseAll();
    uncheckAll();
    outputText.value = "";
  });

  // --- Generate button ---
  generateButton.addEventListener("click", () => {
    const textResult = buildSelectedHierarchy(programmingList, 0);
    outputText.value = textResult;
  });

  // --- Checking a child auto-checks its parents ---
  programmingList.addEventListener("change", (e) => {
    if (e.target.matches(".itemCheckbox") && e.target.checked) {
      checkParents(e.target);
    }
  });

  /********************************************************
   * doSearch()
   * Clears previous selections & highlights; collapses all;
   * then highlights/expands matches.
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
   * Recursively builds the collapsible tree from 'obj'.
   * Each "key => value" becomes a "node" with a header.
   * If there's a "Description" property on that node,
   * we handle it specially: hidden by default, toggled by (i).
   ********************************************************/
  function buildTree(obj, container) {
    // For each key in 'obj', skip "Description" if it exists at this level
    // The actual "Description" for this node is handled in the step
    // where we create that node's children.

    Object.keys(obj).forEach((key) => {
      if (key === "Description") {
        // skip: we do not build a child node for "Description"
        return;
      }

      const val = obj[key];

      // We'll see if 'val' is an object and has a "Description" property
      let childDesc = "";
      if (typeof val === "object" && val !== null && "Description" in val) {
        childDesc = val.Description;  // store it
        delete val.Description;       // remove from child so it doesn't appear as a sub-node
      }

      // Create one "section" in the UI
      const sectionDiv = document.createElement("div");
      sectionDiv.classList.add("section");
      container.appendChild(sectionDiv);

      // The header row
      const headerDiv = document.createElement("div");
      headerDiv.classList.add("section-header");
      sectionDiv.appendChild(headerDiv);

      // Checkbox
      const chk = document.createElement("input");
      chk.type = "checkbox";
      chk.classList.add("itemCheckbox");
      headerDiv.appendChild(chk);

      // Toggle (+/-)
      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = "+";
      headerDiv.appendChild(toggleBtn);

      // Label
      const labelSpan = document.createElement("span");
      labelSpan.textContent = key;
      headerDiv.appendChild(labelSpan);

      // (i) Info button
      const infoBtn = document.createElement("span");
      infoBtn.style.marginLeft = "8px";
      infoBtn.style.color = "blue";
      infoBtn.style.cursor = "pointer";
      infoBtn.textContent = "(i)";
      infoBtn.title = "Toggle description";
      headerDiv.appendChild(infoBtn);

      // Child container
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("section-content");
      sectionDiv.appendChild(contentDiv);

      // If there's a child description for *this* key, create a hidden div
      let descBox = null;
      if (childDesc) {
        descBox = document.createElement("div");
        descBox.classList.add("descBox");
        descBox.style.display = "none"; // hidden by default
        descBox.textContent = childDesc;
        // Insert it after the header, before the children
        sectionDiv.insertBefore(descBox, contentDiv);
      }

      // If val is an object, we build sub-nodes
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
        // It's a leaf
        toggleBtn.textContent = "-";
        toggleBtn.disabled = true;
      }

      // (i) button => toggle descBox if present, else alert
      infoBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // don't toggle the child container
        if (descBox) {
          // Toggle
          descBox.style.display = (descBox.style.display === "none") ? "block" : "none";
        } else {
          alert("No description available for: " + key);
        }
      });
    });
  }

  /********************************************************
   * performSearch(query)
   * Splits query into tokens, finds .section-header label
   * that contain all tokens, highlights them, expands parent.
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
   * Wrap matched tokens in <span class="highlight">
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
   * Expands all ancestor .section-content up the chain
   ********************************************************/
  function expandParents(headerDiv) {
    let currentSection = headerDiv.closest(".section");
    while (currentSection) {
      const parentContent = currentSection.parentElement;
      if (parentContent && parentContent.classList.contains("section-content")) {
        parentContent.classList.add("open");
        // Also set parent's toggle to "-"
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
   * Removes all <span class="highlight"> from label text
   ********************************************************/
  function clearHighlights() {
    const highlights = programmingList.querySelectorAll(".highlight");
    highlights.forEach(h => {
      h.outerHTML = h.textContent;
    });
  }

  /********************************************************
   * collapseAll()
   * Collapses every .section-content
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
   * Unchecks all .itemCheckbox
   ********************************************************/
  function uncheckAll() {
    const checkboxes = programmingList.querySelectorAll(".itemCheckbox");
    checkboxes.forEach(chk => {
      chk.checked = false;
    });
  }

  /********************************************************
   * checkParents(childCheckbox)
   * If a child is checked, also check all its ancestors
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
   * Recursively build an indented list of selected items
   ********************************************************/
  function buildSelectedHierarchy(container, depth) {
    let result = "";
    const sections = container.querySelectorAll(":scope > .section");
    sections.forEach(section => {
      const header = section.querySelector(":scope > .section-header");
      const content = section.querySelector(":scope > .section-content");
      const checkbox = header.querySelector(".itemCheckbox");

      // Recurse children
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
