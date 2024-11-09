import {expect} from "chai"
import sinon from "sinon"
import ProductService from "../../services/ProductService.js";
import productRepo from "../../repository/productRepo.js";

describe('Product Service', () => {
    afterEach(() => {
        sinon.restore();
    });
    describe('add product', () => {
        it('should insert an product and return status 201',
            async () => { 
                let productName = "Chicken Pizza"; 
                let categoryId =  "3";
                let supplierId = "2"; 
                let quantityInStock = "500"; 
                let price = "7.99"; 
                let description = "Healthy Pizza";
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(productRepo, "addProductRepo").resolves('Success');

                    await ProductService.addProductService( productName,categoryId, supplierId, quantityInStock, price, description);

                    expect(productRepo.addProductRepo.calledOnce).to.be.true;
            });
    });
    describe('get all products', () => {
        it('should check product and return status 200',
            async () => {
                    let testGetAllProducts = [
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
                            "ProductName": "Classic Yellow Denim Jacket",
                            "CategoryID": 3,
                            "SupplierID": 3,
                            "QuantityInStock": 150,
                            "Price": "59.99",
                            "Description": "A versatile and stylish classic denim jacket perfect for layering. Made from 100% cotton, it offers a comfortable fit with a timeless look. Ideal for casual outings and adding a rugged touch to any outfit.",
                            "DateAdded": "2024-10-20T16:55:42.000Z"
                        },
                        {
                            "ProductID": 6,
                            "ProductName": "Chicken Burger",
                            "CategoryID": 3,
                            "SupplierID": 2,
                            "QuantityInStock": 350,
                            "Price": "3.99",
                            "Description": "Healthy Burger.",
                            "DateAdded": "2024-11-02T14:01:55.000Z"
                        },
                        {
                            "ProductID": 7,
                            "ProductName": "Chicken Pizza",
                            "CategoryID": 3,
                            "SupplierID": 2,
                            "QuantityInStock": 500,
                            "Price": "7.99",
                            "Description": "Healthy Pizza.",
                            "DateAdded": "2024-11-02T14:02:25.000Z"
                        }
                    ];
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(productRepo, "getAllProductsRepo").resolves(testGetAllProducts);


                    const result = await ProductService.getAllProductsService();
                    expect(result).to.equal(testGetAllProducts);
                    expect(productRepo.getAllProductsRepo.calledOnce).to.be.true;
            });
    });
    describe('get product by Id', () => {
        it('should check an product by Id and return status 200',
            async () => {
                    let productId = 4;
                    let testGetProductById = 
                    {
                        "ProductID": 4,
                        "ProductName": "Classic Yellow Denim Jacket",
                        "CategoryID": 3,
                        "SupplierID": 3,
                        "QuantityInStock": 150,
                        "Price": "59.99",
                        "Description": "A versatile and stylish classic denim jacket perfect for layering. Made from 100% cotton, it offers a comfortable fit with a timeless look. Ideal for casual outings and adding a rugged touch to any outfit.",
                        "DateAdded": "2024-10-20T16:55:42.000Z"
                    };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(productRepo, "getProductByIdRepo").resolves(testGetProductById);


                    const result = await ProductService.getProductByIdService(productId);
                    expect(result).to.equal(testGetProductById);
                    expect(productRepo.getProductByIdRepo.calledOnce).to.be.true;
            });
    });
    describe('update product', () => {
        it('should update an product and return status 200',
            async () => {
                    let productId = 4;
                    let productName = "Updated Yellow Denim Jacket";
                    let categoryId = 3;
                    let supplierId = 3;
                    let quantityInStock = 150;
                    let price = "59.99";
                    let description = "Updated versatile and stylish classic denim jacket perfect for layering. Made from 100% cotton, it offers a comfortable fit with a timeless look. Ideal for casual outings and adding a rugged touch to any outfit.";

                    sinon.stub(productRepo, "updateProductRepo").resolves("success");
                    const result = await ProductService.updateProductService(productId, productName, categoryId, supplierId, quantityInStock, price, description);
                    expect(result).to.equal("success");
                    expect(productRepo.updateProductRepo.calledOnce).to.be.true;

        });
    });
    describe('delete product', () => {
        it('should delete an product and return status 200',
            async () => {
                    let productId = 4;
                    sinon.stub(productRepo, "deleteProductRepo").resolves("success");
                    const result = await ProductService.deleteProductService(productId);
                    expect(result).to.equal("success");
                    expect(productRepo.deleteProductRepo.calledOnce).to.be.true;
        });
    });
});
