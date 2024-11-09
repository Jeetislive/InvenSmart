import express from "express";
import { authenticateAdmin } from "../middleware/adminAuthMiddleware.js";
import { addProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from "../controllers/productController.js";

const productRoute = express.Router();

productRoute.post("/add",authenticateAdmin, addProduct);
productRoute.get("/getAll", getAllProduct);
productRoute.get("/:id",getProductById);
productRoute.put("/:id",authenticateAdmin,updateProduct);
productRoute.delete("/:id",authenticateAdmin,deleteProduct);

export default productRoute;