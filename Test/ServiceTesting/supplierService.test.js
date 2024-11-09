import {expect} from "chai"
import sinon from "sinon"
import SupplierService from "../../services/SupplierService.js";
import supplierRepo from "../../repository/supplierRepo.js";

describe('Supplier Service', () => {
    afterEach(() => {
        sinon.restore();
    });
    describe('add supplier', () => {
        it('should insert an customer and return status 201',
            async () => { 
                let supplierName = "Ankan Dey"; 
                let contactName =  "Ganjedi Bhoi";
                let email = "hello@gmail.com"; 
                let phone = "4569874523"; 
                let address = "Andheri, Maharashtra"; 
                let city = "Andheri"; 
                let state = "Maharashtra"; 
                let zipCode = "726911"; 
                let country = "India"; 
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(supplierRepo, "addSupplierRepo").resolves('Success');

                    await SupplierService.addSupplierService( supplierName, contactName, email, phone, address, city, state, zipCode, country);
                    expect(supplierRepo.addSupplierRepo.calledOnce).to.be.true;
            });
    });
    describe('get all suppliers', () => {
        it('should check an user and return status 200',
            async () => {
                    let testGetAllSuppliers = [
                        {
                            "SupplierID": 1,
                            "SupplierName": "Sirsho Dasgupta",
                            "ContactName": "Ganjedi Bhoi",
                            "Email": "happyweed@gmail.com",
                            "Phone": "6911786911",
                            "Address": "Andheri, Maharashtra",
                            "City": "Andheri",
                            "State": "Maharashtra",
                            "ZipCode": "726911",
                            "Country": "India"
                        },
                        {
                            "SupplierID": 2,
                            "SupplierName": "Ankan Dey",
                            "ContactName": "Ganjedi Bhoi",
                            "Email": "hankan@gmail.com",
                            "Phone": "4569874523",
                            "Address": "Andheri, Maharashtra",
                            "City": "Andheri",
                            "State": "Maharashtra",
                            "ZipCode": "726911",
                            "Country": "India"
                        },
                        {
                            "SupplierID": 3,
                            "SupplierName": "Ankan Dey",
                            "ContactName": "Ganjedi Bhoi",
                            "Email": "hello@gmail.com",
                            "Phone": "4569874523",
                            "Address": "Andheri, Maharashtra",
                            "City": "Andheri",
                            "State": "Maharashtra",
                            "ZipCode": "726911",
                            "Country": "India"
                        }
                    ];
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(supplierRepo, "getAllSuppliersRepo").resolves(testGetAllSuppliers);


                    const result = await SupplierService.getAllSuppliersService();
                    expect(result).to.equal(testGetAllSuppliers);
                    expect(supplierRepo.getAllSuppliersRepo.calledOnce).to.be.true;
            });
    });
});
