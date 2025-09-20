import Router from "express";

import authRoutes from "./auth.routes.js";
import sweetRoutes from "./sweet.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/sweets", sweetRoutes);

export default router;
