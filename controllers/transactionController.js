import AppError from "../error/AppError.js";
import TransactionService from "../services/TransactionService.js";

export const addTransaction = async (req, res, next) => {
    const { customerId, transactionDate, totalAmount, items } = req.body;
    try {
        if (!customerId || !transactionDate || !totalAmount || items.length <= 0 ) {
            throw new AppError("All fields are Required",404);
        }
        const transactionId = await TransactionService.addTransactionService(customerId, transactionDate, totalAmount, items);
        if (!transactionId) {
            throw new AppError("Failed to add user", 400);
        }
        res.status(201).json({ message: 'Transaction added successfully.', transactionId });
    } catch (error) {
        console.error(error);
        next(error);
    }
}
export const getAllTransactions = async (req,res,next) => {
    try {
        const transactions = await TransactionService.getAllTransactionsService();
        res.status(200).json(transactions);
    } catch (error) {
        console.error(error);
        next(error);
    }
}