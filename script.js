document.addEventListener('DOMContentLoaded', function () {
    const programmingList = document.getElementById('programmingList');
    const searchBox = document.getElementById('searchBox');
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
            html += `<span>${key}</span>`;
            html += `<button class="info-button" onclick="showDescription('${id}')">(i)</button>`;
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

    // Function to show description
    window.showDescription = function (id) {
        const section = document.getElementById(id);
        alert(`Description for ${id}: This is a placeholder description.`);
    };

    // Function to search and highlight matches
    function searchList(query) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const content = section.textContent.toLowerCase();
            if (content.includes(query.toLowerCase())) {
                section.classList.add('highlight');
                section.querySelector('.section-content').classList.add('open');
            } else {
                section.classList.remove('highlight');
                section.querySelector('.section-content').classList.remove('open');
            }
        });
    }

    // Event listener for search box
    searchBox.addEventListener('input', function () {
        searchList(this.value);
    });

    // Event listener for generate button
    generateButton.addEventListener('click', function () {
        const selectedItems = [];
        document.querySelectorAll('.section input:checked').forEach(checkbox => {
            selectedItems.push(checkbox.parentElement.textContent.trim());
        });
        outputText.value = selectedItems.join('\n');
    });

    // Populate the list
    programmingList.innerHTML = buildList(installerProgrammingData);
});
