const express = require("express");
const router = express.Router();

const products = [
  { id: 1, name: "Gaming Laptop", category: "Electronics" },
  { id: 2, name: "Office Chair", category: "Furniture" },
  { id: 3, name: "Wireless Mouse", category: "Electronics" },
  { id: 4, name: "Notebook", category: "Stationery" },
];

// ✅ API to filter products
router.get("/", (req, res) => {
  const { query, category } = req.query;

  let filteredProducts = products;

  if (category && category !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (query) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  res.json(filteredProducts);
});

module.exports = router;
