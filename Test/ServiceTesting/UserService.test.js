import {expect} from "chai"
import sinon from "sinon"
import UserService from "../../services/UserService.js";
import userRepo from "../../repository/userRepo.js";

describe('User Service', () => {
    afterEach(() => {
        sinon.restore();
    });
    describe('add user', () => {
        it('should insert an user and return status 201',
            async () => {
                    let username =  "Jeet"; //  Unique  username  for  the  user 
                    let password = "jeetpal@123";  // Password for the user (should be hashed) 
                    let role ="Admin"; // User role ('Admin' or 'Staff') 
                    let email = "jeetpal@gmail.com"; // User email address 
                    let fullName =  "Jeet Pal";  // Full name of the user 
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(userRepo, "addUserRepo").resolves('Success');

                    await UserService.addUserService(username,password,role,email,fullName);
                    expect(userRepo.addUserRepo.calledOnce).to.be.true;
            });
    });
    describe('login user', () => {
        it('should check an user and return status 200',
            async () => {
                    let username =  "Jeet"; //  Unique  username  for  the  user 
                    let password = "jeetpal@123";
                    let testLoginDetails = {
                        "UserID": 1,
                        "Username": "jeet",
                        "Password": "$2a$10$xQw/uxTeSnVLw/RFDCjp5Om3nl7nIKnD80EN8uik1SkfpE0MFndyC",
                        "Role": "Admin",
                        "email": "jeet@gmail.com",
                        "fullName": "Jeet Pal"
                    };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(userRepo, "loginUserRepo").resolves(testLoginDetails);


                    const result = await UserService.loginUserService(username, password);
                    expect(result).to.equal(testLoginDetails);
                    expect(userRepo.loginUserRepo.calledOnce).to.be.true;
            });
    });
});
