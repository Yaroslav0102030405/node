import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Please enter product name"] },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: "user-products",
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
