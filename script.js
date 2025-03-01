document.addEventListener('DOMContentLoaded', function () {
    const programmingList = document.getElementById('programmingList');
    const searchBox = document.getElementById('searchBox');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const selectParentsCheckbox = document.getElementById('selectParents');
    const generateButton = document.getElementById('generateButton');
    const outputText = document.getElementById('outputText');

    // Function to recursively build the list
    function buildList(data, parentKey = '') {
        let html = '';
        for (const key in data) {
            const value = data[key];
            const isObject = typeof value === 'object' && !Array.isArray(value);
            const id = parentKey ? `${parentKey}-${key}` : key;

            html += `<div class="section" id="${id}">`;
            html += `<div class="section-header">`;
            html += `<input type="checkbox" class="item-checkbox">`;
            html += `<span>${key}</span>`;
            html += `<button class="toggle-button">+</button>`;
            html += `</div>`;
            if (isObject) {
                html += `<div class="section-content">${buildList(value, id)}</div>`;
            } else {
                html += `<div class="section-content">${value}</div>`;
            }
            html += `</div>`;
        }
        return html;
    }

    // Function to toggle section visibility
    function toggleSection(section) {
        const content = section.querySelector('.section-content');
        const button = section.querySelector('.toggle-button');
        if (content.classList.contains('open')) {
            content.classList.remove('open');
            button.textContent = '+';
        } else {
            content.classList.add('open');
            button.textContent = '-';
        }
    }

    // Function to search and highlight matches
    function searchList(query) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const content = section.textContent.toLowerCase();
            const normalizedQuery = query.toLowerCase().split(' ').sort().join(' ');
            const normalizedContent = content.split(' ').sort().join(' ');

            if (normalizedContent.includes(normalizedQuery)) {
                section.classList.add('highlight');
                section.querySelector('.section-content').classList.add('open');
            } else {
                section.classList.remove('highlight');
                section.querySelector('.section-content').classList.remove('open');
            }
        });
    }

    // Event listener for search button
    searchButton.addEventListener('click', function () {
        searchList(searchBox.value);
    });

    // Event listener for clear button
    clearButton.addEventListener('click', function () {
        searchBox.value = '';
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('highlight');
            section.querySelector('.section-content').classList.remove('open');
            section.querySelector('.toggle-button').textContent = '+';
        });
        outputText.value = '';
    });

    // Event listener for generate button
    generateButton.addEventListener('click', function () {
        const selectedItems = [];
        document.querySelectorAll('.section input:checked').forEach(checkbox => {
            selectedItems.push(checkbox.parentElement.textContent.trim());
        });
        outputText.value = selectedItems.join('\n');
    });

    // Event delegation for toggle buttons
    programmingList.addEventListener('click', function (event) {
        if (event.target.classList.contains('toggle-button')) {
            const section = event.target.closest('.section');
            toggleSection(section);
        }
    });

    // Populate the list
    programmingList.innerHTML = buildList(installerProgrammingData);
});
