import {expect} from "chai"
import sinon from "sinon"
import SupplierService from "../../services/SupplierService.js";
import { addSupplier, getAllSupplier } from "../../controllers/supplierController.js";

describe('Supplier Controller', () => {
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
    describe('add supplier', () => {
        it('should insert an supplier and return status 201',
            async () => {
                req.body = { 
                    "supplierName": "Ankan Dey", 
                    "contactName":  "Ganjedi Bhoi",
                    "email": "hello@gmail.com", 
                    "phone": "4569874523", 
                    "address": "Andheri, Maharashtra", 
                    "city": "Andheri", 
                    "state": "Maharashtra", 
                    "zipCode": "726911", 
                    "country": "India" 
                    };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(SupplierService, "addSupplierService").resolves('Success');

                    await addSupplier(req,res,next);
                    expect(res.status.calledWith(201)).to.be.true;
            });
    });
    describe('getAll suppliers', () => {
        it('should fetch all existing suppliers and return status 200',
            async () => {
                const suppliers = [
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
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(SupplierService, "getAllSuppliersService").resolves(suppliers);


                    await getAllSupplier(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
                    expect(res.json.calledWith(suppliers)).to.be.true;
            });
    });
});
