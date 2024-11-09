import {expect} from "chai"
import sinon from "sinon"
import categoriesRepo from "../../repository/categoriesRepo.js";
import CategoriesService from "../../services/CategoriesService.js";

describe('Category Service', () => {
    afterEach(() => {
        sinon.restore();
    });
    describe('add category', () => {
        it('should insert an category and return status 201',
            async () => { 
                let categoryName = "Food"; 
                let description =  "This category includes a wide range of apparel, including casual wear, formal attire, sportswear, and seasonal clothing. It offers options for men, women, and children, catering to various styles and sizes. From everyday basics like t-shirts and jeans to elegant dresses, suits, and outerwear, this category covers all clothing needs for different occasions and weather conditions";
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(categoriesRepo, "addCategoriesRepo").resolves('Success');

                    await CategoriesService.addCategoriesService( categoryName, description);
                    expect(categoriesRepo.addCategoriesRepo.calledOnce).to.be.true;
            });
    });
    describe('get all categories', () => {
        it('should check an category and return status 200',
            async () => {
                    let testGetAllCategories = [
                        {
                            "CategoryID": 1,
                            "CategoryName": "Clothes",
                            "Description": "This category includes a wide range of apparel, including casual wear, formal attire, sportswear, and seasonal clothing. It offers options for men, women, and children, catering to various styles and sizes. From everyday basics like t-shirts and jeans to elegant dresses, suits, and outerwear, this category covers all clothing needs for different occasions and weather conditions"
                        },
                        {
                            "CategoryID": 3,
                            "CategoryName": "Food",
                            "Description": "This category includes a wide range of apparel, including casual wear, formal attire, sportswear, and seasonal clothing. It offers options for men, women, and children, catering to various styles and sizes. From everyday basics like t-shirts and jeans to elegant dresses, suits, and outerwear, this category covers all clothing needs for different occasions and weather conditions"
                        }
                    ];
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(categoriesRepo, "getAllCategoriesRepo").resolves(testGetAllCategories);


                    const result = await CategoriesService.getAllCategoriesService();
                    expect(result).to.equal(testGetAllCategories);
                    expect(categoriesRepo.getAllCategoriesRepo.calledOnce).to.be.true;
            });
    });
    describe('get category by Id', () => {
        it('should check an category by Id and return status 200',
            async () => {
                    let categoryId = 1;
                    let testGetCategoryById = 
                        {
                            "CategoryID": 1,
                            "CategoryName": "Clothes",
                            "Description": "This category includes a wide range of apparel, including casual wear, formal attire, sportswear, and seasonal clothing. It offers options for men, women, and children, catering to various styles and sizes. From everyday basics like t-shirts and jeans to elegant dresses, suits, and outerwear, this category covers all clothing needs for different occasions and weather conditions"
                        };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(categoriesRepo, "getCategoryByIdRepo").resolves(testGetCategoryById);


                    const result = await CategoriesService.getCategoriesByIdService(categoryId);
                    expect(result).to.equal(testGetCategoryById);
                    expect(categoriesRepo.getCategoryByIdRepo.calledOnce).to.be.true;
            });
    });
});
