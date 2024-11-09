import {expect} from "chai"
import sinon from "sinon"
import CustomerService from "../../services/CustomerService.js";
import { addCustomer, getAllCustomers } from "../../controllers/customerController.js";

describe('Customer Controller', () => {
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
    describe('add customer', () => {
        it('should insert an customer and return status 201',
            async () => {
                req.body = { 
                    "customerName": "Jeet Pal", 
                    "email": "jeetpal7804321@gmail.com", 
                    "phone": "7003955911", 
                    "address": "Kona,Howrah-14", 
                    "city": "Howrah", 
                    "state": "West Bengal", 
                    "zipCode": "711114", 
                    "country": "India" 
                    };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(CustomerService, "addCustomerService").resolves('Success');

                    await addCustomer(req,res,next);
                    expect(res.status.calledWith(201)).to.be.true;
            });
    });
    describe('getAll customers', () => {
        it('should fetch all existing customers and return status 200',
            async () => {
                const customers = [
                    {
                        "CustomerID": 1,
                        "CustomerName": "Ankan Biswas",
                        "Email": "ankanb@gmail.com",
                        "Phone": "801745986",
                        "Address": "Baguihati,Kolkata-01",
                        "City": "Kolkata",
                        "State": "West Bengal",
                        "ZipCode": "700101",
                        "Country": "India"
                    },
                    {
                        "CustomerID": 2,
                        "CustomerName": "Arif Islam",
                        "Email": "arif@gmail.com",
                        "Phone": "8697485612",
                        "Address": "Teghoria,Kolkata-01",
                        "City": "Kolkata",
                        "State": "West Bengal",
                        "ZipCode": "700101",
                        "Country": "India"
                    },
                    {
                        "CustomerID": 3,
                        "CustomerName": "Jeet Pal",
                        "Email": "jeetpal7804321@gmail.com",
                        "Phone": "7003955911",
                        "Address": "Kona,Howrah-14",
                        "City": "Howrah",
                        "State": "West Bengal",
                        "ZipCode": "711114",
                        "Country": "India"
                    }
                ];
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(CustomerService, "getAllCustomersService").resolves(customers);


                    await getAllCustomers(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
                    expect(res.json.calledWith(customers)).to.be.true;
            });
    });
});
