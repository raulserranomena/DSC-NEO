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
   * If 'obj' has a "Description" property, we remove it
   * from the children and create a hidden .descBox.
   ********************************************************/
  function buildTree(obj, container) {
    // We'll iterate over each key in 'obj'
    // But if there's a "Description" property, let's store it separately:
    const descriptionText = obj.Description;
    if (descriptionText) {
      // Remove the "Description" property so it doesn't appear in the child nodes
      delete obj.Description;
    }

    // Now iterate the rest
    Object.keys(obj).forEach((key) => {
      // Skip if the key is "Description" (already handled above)
      if (key === "Description") return;

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

      // (i) info button
      const infoBtn = document.createElement("span");
      infoBtn.style.marginLeft = "8px";
      infoBtn.style.color = "blue";
      infoBtn.style.cursor = "pointer";
      infoBtn.textContent = "(i)";
      infoBtn.title = "Toggle description";
      headerDiv.appendChild(infoBtn);

      // Section content
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("section-content");
      sectionDiv.appendChild(contentDiv);

      // If the child 'val' is an object, we build a subtree.
      // If it's a string/leaf, we won't create children.
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
        // Leaf node
        toggleBtn.textContent = "-";
        toggleBtn.disabled = true;
      }

      // Now, handle if this particular node has a "Description"
      // from the parent's object? Actually we want to handle
      // "descriptionText" if it's specifically for *this* node, but
      // your data is structured so that "Description" might appear
      // at the same level as the siblings. So let's do this:
    });

    // If this object had a "Description" text, we add a hidden .descBox
    // at the *end* of the container, or right after the parent's header.
    // In your JSON structure, "Description" is at the same level as e.g. "[000] Label Programming".
    // If you'd prefer each node to show its own "Description," you'd store it differently.
    // For now, let's show it at the top level *for this object* if it existed.

    if (descriptionText) {
      // We'll insert a .descBox at the BOTTOM of 'container'
      // or you could do it at the top if you prefer
      const descBox = document.createElement("div");
      descBox.classList.add("descBox");
      descBox.textContent = descriptionText;
      container.insertBefore(descBox, container.firstChild);

      // We also attach an (i) button logic to the "section-header" above
      // But there's no single "section-header" for the entire object if it had multiple keys
      // Another approach: If you want the (i) in the parent label,
      // you might pass the description upward. For now, let's do a simpler approach:

      // We'll create a small "description toggler" div at the top
      // so that the user can toggle the description for this entire block if they want.
      // This approach depends on your data structure. Another approach is to
      // store the parent's description in buildTree's caller so we have
      // 1:1 item => description.

      // For demonstration, let's do a small trick:
      // - If this object is at the top level, we have no single "header" to attach the (i) button to.
      // - We might do a special "description button" or just always show it.
      // Instead, let's do: Always hidden by default, user can toggle it by (i) in the parent's header if we had one.

      // For your case, you can do this: If you want a single node with that "Description" property,
      // you'd store it in a variable "myDesc" and have a .descBox for that item specifically.

      // Let's do a simpler approach:
      // We'll store it in a data attribute, so that the parent's (i) can show/hide it.
      // That means we must do it right before we parse children. So let's do it differently:
    }
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
