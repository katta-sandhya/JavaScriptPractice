// script.js
const data = [
  { title: "The Rise of AI", category: "technology" },
  { title: "10 Tips for a Healthier Life", category: "health" },
  { title: "How to Stay Productive", category: "lifestyle" },
  { title: "Exploring Quantum Computing", category: "technology" },
  { title: "Meditation for Beginners", category: "health" },
  { title: "Work-Life Balance in the Modern Era", category: "lifestyle" },
];

function filterResults() {
  const searchQuery = document.getElementById("search-box").value.toLowerCase();
  const filterValue = document.getElementById("filter").value;
  const resultsContainer = document.getElementById("results");

  resultsContainer.innerHTML = ""; // Clear previous results

  const filteredData = data.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery);
    const matchesFilter =
      filterValue === "all" || item.category === filterValue;
    return matchesSearch && matchesFilter;
  });

  if (filteredData.length === 0) {
    resultsContainer.innerHTML = `<p>No results found.</p>`;
  } else {
    filteredData.forEach((item) => {
      const resultItem = document.createElement("div");
      resultItem.className = "result-item";
      resultItem.textContent = item.title;
      resultsContainer.appendChild(resultItem);
    });
  }
}

// Initialize results on page load
document.addEventListener("DOMContentLoaded", filterResults);
