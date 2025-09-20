import mongoose from "mongoose";

const sweetsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

const Sweets = mongoose.model("Sweets", sweetsSchema);

export default Sweets;
