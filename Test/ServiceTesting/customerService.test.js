import {expect} from "chai"
import sinon from "sinon"
import CustomerService from "../../services/CustomerService.js";
import customerRepo from "../../repository/customerRepo.js";

describe('Customer Service', () => {
    afterEach(() => {
        sinon.restore();
    });
    describe('add customer', () => {
        it('should insert an customer and return status 201',
            async () => { 
                let customerName = "Jeet Pal"; 
                let email = "jeetpal7804321@gmail.com";
                let phone = "7003955911"; 
                let address = "Kona,Howrah-14"; 
                let city = "Howrah"; 
                let state = "West Bengal"; 
                let zipCode = "711114"; 
                let country = "India"; 
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(customerRepo, "addCustomerRepo").resolves('Success');

                    await CustomerService.addCustomerService( customerName, email, phone, address, city, state, zipCode, country);
                    expect(customerRepo.addCustomerRepo.calledOnce).to.be.true;
            });
    });
    describe('get all customers', () => {
        it('should check an user and return status 200',
            async () => {
                    let testGetAllCustomers = [
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
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(customerRepo, "getAllCustomersRepo").resolves(testGetAllCustomers);


                    const result = await CustomerService.getAllCustomersService();
                    expect(result).to.equal(testGetAllCustomers);
                    expect(customerRepo.getAllCustomersRepo.calledOnce).to.be.true;
            });
    });
});
