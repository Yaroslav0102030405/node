import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
dotenv.config();
const app = express();
const { DB_HOST } = process.env;

// Middleware для обробки JSON-запитів та CORS
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Server port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello API!");
});

app.post("/api/products", async (req, res) => {
  // res.send(req.body);
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Connected database mongodb");
  })
  .catch(() => {
    console.log("Connected failed");
    process.exit(1);
  });
