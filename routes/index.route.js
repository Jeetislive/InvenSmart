import express from "express";
import userRoute from "./user.route.js";
import customerRoute from "./customer.route.js";
import supplierRoute from "./supplier.route.js";
import categoriesRoute from "./categories.route.js";
import productRoute from "./product.route.js";
import transactionRoute from "./transaction.route.js";
import inventoryAdjustmentRoutes from "./inventory.route.js";

const route = express.Router();

route.use("/users",userRoute);
route.use("/customers",customerRoute);
route.use("/suppliers",supplierRoute);
route.use("/categories",categoriesRoute);
route.use("/products",productRoute);
route.use("/transactions",transactionRoute);
route.use("/inventory",inventoryAdjustmentRoutes);

export default route;