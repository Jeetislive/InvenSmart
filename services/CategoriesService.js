import categoriesRepo from "../repository/categoriesRepo.js";

const addCategoriesService = async(categoryName,description) => {
    const insertId = await categoriesRepo.addCategoriesRepo(categoryName,description);
    return insertId;
}
const getAllCategoriesService = async() => {
    const results = await categoriesRepo.getAllCategoriesRepo();
    return results;
}
const getCategoriesByIdService = async(id) => {
    const result = await categoriesRepo.getCategoryByIdRepo(id);
    return result;
}

export default { addCategoriesService, getAllCategoriesService, getCategoriesByIdService };