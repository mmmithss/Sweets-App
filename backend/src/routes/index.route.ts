import Router from "express";

import authRoutes from "./auth.routes.js";
import sweetRoutes from "./sweet.routes.js";
import { protectRoute } from "../middleware/token.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/sweets", protectRoute, sweetRoutes);

export default router;
