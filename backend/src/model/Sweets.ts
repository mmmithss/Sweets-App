import { Document, model, Schema, Types } from "mongoose";

export interface SweetDocument extends Document {
  _id: Types.ObjectId;
  name: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
}

const sweetsSchema = new Schema({
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
  image: {
    type: String,
  },
});

const Sweets = model<SweetDocument>("Sweets", sweetsSchema);

export default Sweets;
