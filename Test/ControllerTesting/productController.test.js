import {expect} from "chai"
import sinon from "sinon"
import ProductService from "../../services/ProductService.js";
import { addProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from "../../controllers/productController.js";

describe('Product Controller', () => {
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
    describe('add product', () => {
        it('should insert an product and return status 201',
            async () => {
                req.body = {
                    "productName": "Classic white Denim Jacket",
                    "categoryId": 3,
                    "supplierId": 3,
                    "quantityInStock": 250,
                    "price": 69.99,
                    "description": "A versatile and stylish classic denim jacket perfect for layering. Made from 100% cotton, it offers a comfortable fit with a timeless look. Ideal for casual outings and adding a rugged touch to any outfit."
                  };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(ProductService, "addProductService").resolves('Success');

                    await addProduct(req,res,next);
                    expect(res.status.calledWith(201)).to.be.true;
            });
    });
    describe('getAll products', () => {
        it('should fetch all existing products and return status 200',
            async () => {
                const products = [
                    {
                        "ProductID": 2,
                        "ProductName": "Classic Denim Jacket",
                        "CategoryID": 1,
                        "SupplierID": 1,
                        "QuantityInStock": 150,
                        "Price": "59.99",
                        "Description": "A versatile and stylish classic denim jacket perfect for layering. Made from 100% cotton, it offers a comfortable fit with a timeless look. Ideal for casual outings and adding a rugged touch to any outfit.",
                        "DateAdded": "2024-10-19T20:45:45.000Z"
                    },
                    {
                        "ProductID": 4,
                        "ProductName": "Classic white Denim Jacket",
                        "CategoryID": 3,
                        "SupplierID": 3,
                        "QuantityInStock": 100,
                        "Price": "69.99",
                        "Description": "A versatile and stylish classic denim jacket perfect for layering. Made from 100% cotton, it offers a comfortable fit with a timeless look. Ideal for casual outings and adding a rugged touch to any outfit.",
                        "DateAdded": "2024-10-20T16:55:42.000Z"
                    }
                ];
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(ProductService, "getAllProductsService").resolves(products);
                    await getAllProduct(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
                    expect(res.json.calledWith(products)).to.be.true;
            });
    });
    describe('get product by Id', () => {
        it('should fetch an existing product and return status 200',
            async () => {
                const product = {
                    "ProductID": 4,
                    "ProductName": "Classic white Denim Jacket",
                    "CategoryID": 3,
                    "SupplierID": 3,
                    "QuantityInStock": 100,
                    "Price": "69.99",
                    "Description": "A versatile and stylish classic denim jacket perfect for layering. Made from 100% cotton, it offers a comfortable fit with a timeless look. Ideal for casual outings and adding a rugged touch to any outfit.",
                    "DateAdded": "2024-10-20T16:55:42.000Z"
                };
                req.params = { id: 4 };
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(ProductService, "getProductByIdService").resolves(product);
                    await getProductById(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
                    expect(res.json.calledWith(product)).to.be.true;
            });
    });
    describe('Update product by Id', () => {
        it('should fetch an existing product and return status 200',
            async () => {
                const updatedProduct = { message: 'Product updated successfully.'};
                req.params = { id: 4 };
                req.body = {
                    "productName": "Classic Yellow Denim Jacket",
                    "categoryId": 3,
                    "supplierId": 3,
                    "quantityInStock": 150,
                    "price": 59.99,
                    "description": "A versatile and stylish classic denim jacket perfect for layering. Made from 100% cotton, it offers a comfortable fit with a timeless look. Ideal for casual outings and adding a rugged touch to any outfit."
                  };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(ProductService, "updateProductService").resolves(updatedProduct);
                    await updateProduct(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
                    expect(res.json.calledWith(updatedProduct)).to.be.true;
            });
    });
    describe('delete product', () => {
        it('should fetch an existing product and return status 200',
            async () => {
                const product = {"message": "Product deleted successfully."};
                req.params = { id: 5 };
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(ProductService, "deleteProductService").resolves(product);
                    await deleteProduct(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
                    expect(res.json.calledWith(product)).to.be.true;
            });
    });

});
