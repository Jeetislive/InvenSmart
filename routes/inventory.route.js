import express from "express"
import { adjustInventory } from "../controllers/inventoryController.js";

const inventoryAdjustmentRoutes = express.Router();

inventoryAdjustmentRoutes.post("/adjustments", adjustInventory);

export default inventoryAdjustmentRoutes;