import Sweets from "../model/Sweets.js";
import { toSweetDto } from "../utils/sweet.mapper.js";
export const addSweet = async (req, res, next) => {
    try {
        const { name, price, category } = req.body;
        const sweet = new Sweets({ name, price, category });
        await sweet.save();
        console.log(sweet);
        return res.status(201).json({ message: "Sweet added successfully" });
    }
    catch (error) {
        console.log("Error in addSweet controller", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const getAllSweets = async (req, res, next) => {
    try {
        const sweets = await Sweets.find({});
        const data = sweets.map(toSweetDto);
        return res.status(200).json(data);
    }
    catch (error) {
        console.log("Error in getAllSweets controller", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
//todo
export const searchSweets = async (req, res, next) => {
    try {
    }
    catch (error) {
        console.log("Error in searchSweets controller", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const updateSweet = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, price, category } = req.body;
        const sweet = await Sweets.findById(id);
        if (!sweet) {
            return res.status(404).json({ message: "Sweet not found" });
        }
        sweet.name = name;
        sweet.price = price;
        sweet.category = category;
        await sweet.save();
        return res
            .status(200)
            .json({ message: "Sweet updated successfully", sweet });
    }
    catch (error) {
        console.log("Error in updateSweet controller", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const getSingleSweet = async (req, res, next) => {
    try {
        const { id } = req.params;
        const sweet = await Sweets.findById(id);
        if (!sweet) {
            return res.status(404).json({ message: "Sweet not found" });
        }
        return res.status(200).json(sweet);
    }
    catch (error) {
        console.log("Error in getSingleSweet controller", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const deleteSweet = async (req, res, next) => {
    try {
        const { id } = req.params;
        const sweet = await Sweets.findByIdAndDelete(id);
        if (!sweet) {
            return res.status(404).json({ message: "Sweet not found" });
        }
        return res
            .status(200)
            .json({ message: "Sweet deleted successfully", sweet });
    }
    catch (error) {
        console.log("Error in deleteSweet controller", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const purchase = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        const sweet = await Sweets.findById(id);
        if (!sweet) {
            return res.status(404).json({ message: "Sweet not found" });
        }
        if (quantity > sweet.quantity) {
            return res
                .status(400)
                .json({ message: "Cannot Purchase - Exceeds current stock" });
        }
        sweet.quantity -= quantity;
        await sweet.save();
        return res
            .status(200)
            .json({ message: "Sweet purchased successfully", sweet });
    }
    catch (error) {
        console.log("Error in purchase controller", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const restock = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        const sweet = await Sweets.findById(id);
        if (!sweet) {
            return res.status(404).json({ message: "Sweet not found" });
        }
        sweet.quantity += quantity;
        await sweet.save();
        return res
            .status(200)
            .json({ message: "Sweet restocked successfully", sweet });
    }
    catch (error) {
        console.log("Error in restock controller", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
//# sourceMappingURL=sweets.controller.js.map