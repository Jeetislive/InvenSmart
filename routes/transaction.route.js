import express from "express"
import { authenticateAdmin } from "../middleware/adminAuthMiddleware.js";
import { addTransaction, getAllTransactions } from "../controllers/transactionController.js";

const transactionRoute = express.Router();

transactionRoute.post("/add", addTransaction);
transactionRoute.get("/",authenticateAdmin, getAllTransactions);

export default transactionRoute;