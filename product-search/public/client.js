import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function ProductSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [products, setProducts] = useState([]);

  const categories = ["All", "Electronics", "Furniture", "Stationery"];

  useEffect(() => {
    fetch(`/api/products?query=${query}&category=${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [query, category]);

  return (
    <div>
      <h1>Product Search</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

// ✅ Find the root element and render the component correctly
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<ProductSearch />);
} else {
  console.error("❌ No root element found!");
}
