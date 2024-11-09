import {expect} from "chai"
import sinon from "sinon"
import TransactionService from "../../services/TransactionService.js";
import { addTransaction, getAllTransactions } from "../../controllers/transactionController.js";

describe('Transaction Controller', () => {
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
    describe('add transaction', () => {
        it('should insert an transaction and return status 201',
            async () => {
                req.body = {
                    "customerId": "1",
                    "transactionDate": "2024-10-20 23:10:42",
                    "totalAmount": "60000",
                    "items": [
                        {
                            "productId": "4",
                            "quantity": "5",
                            "unitPrice": "40000"
                        },
                        {
                            "productId": "2",
                            "quantity": "2",
                            "unitPrice": "10000"
                        }
                    ]
                };
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(TransactionService, "addTransactionService").resolves('Success');

                    await addTransaction(req,res,next);
                    expect(res.status.calledWith(201)).to.be.true;
            });
    });
    describe('getAll transactions', () => {
        it('should fetch all existing transactions and return status 200',
            async () => {
                const transactions = [
                    {
                        "TransactionID": 2,
                        "CustomerID": 1,
                        "TransactionDate": "2024-10-20T17:40:42.000Z",
                        "TotalAmount": "60000.00"
                    }
                ];
                req.body = {};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(TransactionService, "getAllTransactionsService").resolves(transactions);
                    await getAllTransactions(req,res,next);
                    expect(res.status.calledWith(200)).to.be.true;
                    expect(res.json.calledWith(transactions)).to.be.true;
            });
    });
});
