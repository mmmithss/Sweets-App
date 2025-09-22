import { Document, model, Schema, Types } from "mongoose";
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
const Sweets = model("Sweets", sweetsSchema);
export default Sweets;
//# sourceMappingURL=Sweets.js.map