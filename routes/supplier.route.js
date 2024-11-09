import express from "express"
import { addSupplier, getAllSupplier } from "../controllers/supplierController.js";
import { authenticateAdmin } from "../middleware/adminAuthMiddleware.js";

const supplierRoute = express.Router();

supplierRoute.post("/add",authenticateAdmin, addSupplier);
supplierRoute.get("/getAll", getAllSupplier);

export default supplierRoute;