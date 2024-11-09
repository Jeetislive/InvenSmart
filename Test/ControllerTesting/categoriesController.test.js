import {expect} from "chai"
import sinon from "sinon"
import CategoriesService from "../../services/CategoriesService.js";
import { addCategories, getAllCategories, getCategoriesById } from "../../controllers/categoriesController.js";

describe('Category Controller', () => {
    let req, res, next;

    beforeEach(() => {
        req = {};
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub()
        };
        next = sinon.stub();
    });
    afterEach(() => {
        sinon.restore();
    });
    describe('add category', () => {
        it('should insert an category and return status 201',
            async () => {
                req.body = { 
                    "categoryName": "Food",
                    "description": "This category includes a wide range of apparel, including casual wear, formal attire, sportswear, and seasonal clothing. It offers options for men, women, and children, catering to various styles and sizes. From everyday basics like t-shirts and jeans to elegant dresses, suits, and outerwear, this category covers all clothing needs for different occasions and weather conditions" 
                    };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(CategoriesService, "addCategoriesService").resolves('Success');

                    await addCategories(req,res,next);
                    expect(res.status.calledWith(201)).to.be.true;
            });
    });
    describe('getAll categories', () => {
        it('should fetch all existing categories and return status 200',
            async () => {
                const categories = [
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
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(CategoriesService, "getAllCategoriesService").resolves(categories);


                    await getAllCategories(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
                    expect(res.json.calledWith(categories)).to.be.true;
            });
    });
    describe('get category by Id', () => {
        it('should fetch an existing category and return status 200',
            async () => {
                const category = {
                    "CategoryID": 1,
                    "CategoryName": "Clothes",
                    "Description": "This category includes a wide range of apparel, including casual wear, formal attire, sportswear, and seasonal clothing. It offers options for men, women, and children, catering to various styles and sizes. From everyday basics like t-shirts and jeans to elegant dresses, suits, and outerwear, this category covers all clothing needs for different occasions and weather conditions"
                };
                req.params = { id: 1 };
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(CategoriesService, "getCategoriesByIdService").resolves(category);


                    await getCategoriesById(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
                    expect(res.json.calledWith(category)).to.be.true;
            });
    });
});
