import mongoose from "mongoose";
const sweetsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        trype: String,
        required: true
    }
});
//# sourceMappingURL=Sweets.js.map