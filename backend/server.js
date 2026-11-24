import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Keyboard", price: 1200 },
  { id: 2, name: "Mouse", price: 650 },
  { id: 3, name: "Monitor", price: 12500 }
];

app.get("/", (req, res) => res.json({ message: "Simple MERN demo API is running" }));

app.get("/api/products", (req, res) => res.json(products));

app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

app.post("/api/products", (req, res) => {
  const { name, price } = req.body;
  if (!name || typeof price !== "number") {
    return res.status(400).json({ message: "Provide name and numeric price" });
  }
  const product = { id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1, name, price };
  products.push(product);
  res.status(201).json(product);
});

app.listen(PORT, () => console.log(`API server listening on http://localhost:${PORT}`));
