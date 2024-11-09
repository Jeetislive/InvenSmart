import express from "express"
import { addCustomer, getAllCustomers } from "../controllers/customerController.js";

const customerRoute = express.Router();

customerRoute.post("/add", addCustomer);
customerRoute.get("/getAll", getAllCustomers);

export default customerRoute;