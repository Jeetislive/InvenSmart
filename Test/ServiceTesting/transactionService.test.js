import {expect} from "chai"
import sinon from "sinon"
import transactionRepo from "../../repository/transactionRepo.js";
import TransactionService from "../../services/TransactionService.js";


describe('Transaction Service', () => {
    afterEach(() => {
        sinon.restore();
    });
    describe('add transaction', () => {
        it('should insert an transaction and return status 201',
            async () => { 
                let customerId = "3";
                let transactionDate = "2024-10-20 23:10:42"; 
                let totalAmount =  "75.89";
                let items = [
                    {
                        productId : "6",
                        quantity : "3",
                        unitPrice : "3.99"
                    },
                    {
                        productId : "7",
                        quantity : "8",
                        unitPrice : "7.99"
                    }
                ];
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(transactionRepo, "addTransactionRepo").resolves('Success');

                    await TransactionService.addTransactionService(
                        customerId,
                        transactionDate,
                        totalAmount,
                        items
                    );
                    expect(transactionRepo.addTransactionRepo.calledOnce).to.be.true;
            });
    });
    describe('get all transaction', () => {
        it('should check an transaction and return status 200',
            async () => {
                    let testGetAllTransactions = [
                        {
                            "TransactionID": 2,
                            "CustomerID": 1,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "60000.00"
                        },
                        {
                            "TransactionID": 17,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 18,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 19,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 21,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 22,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 23,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 24,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 25,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 26,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 27,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 28,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 29,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 30,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 34,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 35,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "45000.00"
                        },
                        {
                            "TransactionID": 36,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "28000.00"
                        },
                        {
                            "TransactionID": 37,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "28000.00"
                        },
                        {
                            "TransactionID": 38,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "28000.00"
                        },
                        {
                            "TransactionID": 39,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "28000.00"
                        },
                        {
                            "TransactionID": 45,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "28000.00"
                        },
                        {
                            "TransactionID": 48,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "28000.00"
                        },
                        {
                            "TransactionID": 49,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "28000.00"
                        },
                        {
                            "TransactionID": 50,
                            "CustomerID": 3,
                            "TransactionDate": "2024-10-20T17:40:42.000Z",
                            "TotalAmount": "75.89"
                        },
                        {
                            "TransactionID": 51,
                            "CustomerID": 3,
                            "TransactionDate": "2024-11-02T17:40:42.000Z",
                            "TotalAmount": "75.89"
                        }
                    ];
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(transactionRepo, "getAllTransactionsRepo").resolves(testGetAllTransactions);


                    const result = await TransactionService.getAllTransactionsService();
                    expect(result).to.equal(testGetAllTransactions);
                    expect(transactionRepo.getAllTransactionsRepo.calledOnce).to.be.true;
            });
    });
});
