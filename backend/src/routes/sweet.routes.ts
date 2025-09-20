import Router from "express";
import {
  addSweet,
  deleteSweet,
  getAllSweets,
  getSingleSweet,
  purchase,
  restock,
  searchSweets,
  updateSweet,
} from "../controllers/sweets.controller.js";

import { checkAdmin } from "../middleware/checkAdmin.js";
import {
  addSweetFormValidations,
  inventoryFormValidations,
  updateSweetFormValidations,
  validate,
} from "../middleware/formValidators.js";

const sweetRoutes = Router();

sweetRoutes.post("/", addSweetFormValidations, validate, addSweet);
sweetRoutes.get("/", getAllSweets);
sweetRoutes.get("/search", searchSweets);
sweetRoutes.get("/:id", getSingleSweet);
sweetRoutes.put("/:id", updateSweetFormValidations, validate, updateSweet);

//admin Only
sweetRoutes.delete("/:id", checkAdmin, deleteSweet);

//inventory actions
sweetRoutes.put("/:id/purchase", inventoryFormValidations, validate, purchase);
sweetRoutes.put(
  "/:id/restock",
  checkAdmin,
  inventoryFormValidations,
  validate,
  restock
); //---admin only

export default sweetRoutes;
