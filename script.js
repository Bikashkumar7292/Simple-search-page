// Sample data (you can expand it as needed)
const data = [
    { title: "How to Learn JavaScript", type: "tutorials", content: "JavaScript is a versatile programming language..." },
    { title: "Understanding CSS Flexbox", type: "tutorials", content: "CSS Flexbox is a layout model..." },
    { title: "Top 10 Web Development Trends in 2024", type: "articles", content: "In 2024, web development is evolving rapidly..." },
    { title: "Best JavaScript Libraries to Use in 2024", type: "articles", content: "Libraries like React, Vue, and Svelte..." },
    { title: "Guide to Responsive Web Design", type: "tutorials", content: "Responsive design ensures websites look good on all devices..." },
];

function searchResults() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filter = document.getElementById('filter').value;
    const resultsContainer = document.getElementById('resultsContainer');

    // Filter the data based on the query and selected filter
    const filteredData = data.filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query);
        const matchesFilter = filter === 'all' || item.type === filter;
        return matchesQuery && matchesFilter;
    });

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Display results
    if (filteredData.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        filteredData.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
            resultsContainer.appendChild(resultItem);
        });
    }
}
