const express = require("express");
const app = express();
const PORT = 3000;

const products = [
  { id: 1, name: "Gaming Laptop", category: "Electronics" },
  { id: 2, name: "Office Chair", category: "Furniture" },
  { id: 3, name: "Wireless Mouse", category: "Electronics" },
  { id: 4, name: "Notebook", category: "Stationery" },
];

app.use(express.static("public"));

app.get("/api/products", (req, res) => {
  const searchQuery = req.query.query || "";
  const category = req.query.category || "";

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (category === "" ||
        product.category.toLowerCase() === category.toLowerCase())
  );

  res.json(filteredProducts);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
