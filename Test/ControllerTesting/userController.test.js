import {expect} from "chai"
import sinon from "sinon"
import UserService from "../../services/UserService.js";
import { addUser, loginUser } from "../../controllers/userController.js";
import createToken from "../../JWTToken/generateToken.js";
import AppError from "../../error/AppError.js";

describe('User Controller', () => {
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
    describe('add user', () => {
        it('should insert an user and return status 201',
            async () => {
                req.body = { 
                    "username": "Jeet", //  Unique  username  for  the  user 
                    "password": "jeetpal@123",  // Password for the user (should be hashed) 
                    "role": "Admin", // User role ('Admin' or 'Staff') 
                    "email": "jeetpal@gmail.com", // User email address 
                    "fullName": "Jeet Pal"  // Full name of the user 
                    };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(UserService, "addUserService").resolves('Success');

                    await addUser(req,res,next);
                    expect(res.status.calledWith(201)).to.be.true;
            });
        it('should throw an error when adding user and return status 404',
            async () => {
                req.body = { 
                    "username": "Simon", //  Unique  username  for  the  user 
                    "password": "Simon@123",  // Password for the user (should be hashed) 
                    "role": "Admin", // User role ('Admin' or 'Staff') 
                    "email": "Simon@gmail.com"  // Full name of the user 
                    };
                    // Stub the correct method: addUserService from UserService
                    const next = sinon.spy();
                    const error = new AppError();
                    sinon.stub(UserService, "addUserService").rejects(error);
                    
                    await addUser(req,res,next);
                    expect(next.calledOnce).to.be.true;
                    expect(next.calledWith(error)).to.be.true;

            });
    });
    describe('login user', () => {
        it('should check an user and return status 200',
            async () => {
                req.body = { 
                    "username": "Jeet", //  Unique  username  for  the  user 
                    "password": "jeetpal@123"
                    };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(UserService, "loginUserService").resolves('Success');
                    sinon.stub(createToken, "createToken").resolves('token');


                    await loginUser(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
            });
    });
});
