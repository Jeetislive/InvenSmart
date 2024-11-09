import express from "express"
import { addCategories, getAllCategories, getCategoriesById } from "../controllers/categoriesController.js";

const categoriesRoute = express.Router();

categoriesRoute.post("/add", addCategories);
categoriesRoute.get("/", getAllCategories);
categoriesRoute.get("/:id", getCategoriesById);

export default categoriesRoute;