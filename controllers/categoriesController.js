import AppError from "../error/AppError.js";
import CategoriesService from "../services/CategoriesService.js";

export const addCategories = async (req,res,next) => {
    try {
        const { categoryName, description } = req.body;
    if (!categoryName || !description ) {
        throw new AppError("All Fields are Required",400);
    }
    const categoryId = await CategoriesService.addCategoriesService(categoryName,description);
    if (!categoryId) {
        throw new AppError("Failed to add Category",500);
    }
    res.status(201).json({msg: "Category Adder Successfully",categoryId});   
    } catch (error) {
        console.log(error);
        next(error);
    } 
}
export const getAllCategories = async (req,res,next) => {
    try {
        const categories = await CategoriesService.getAllCategoriesService();
        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        next(error);
    }
}
export const getCategoriesById = async (req,res,next) => {
    try {
        const { id } = req.params;
        const category = await CategoriesService.getCategoriesByIdService(id);
        if (!category) {
            throw new AppError("Category Not Found",404);
        }
        res.status(200).json(category);
    } catch (error) {
        console.log(error);
        next(error);
    }
}