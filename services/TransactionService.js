import transactionRepo from "../repository/transactionRepo.js";

const addTransactionService = async ( customerId, transactionDate, totalAmount, items) => {
    const insertId = await transactionRepo.addTransactionRepo(customerId, transactionDate, totalAmount, items);
    return insertId;   
}

const getAllTransactionsService = async () => {
    const transactions = await transactionRepo.getAllTransactionsRepo();
    return transactions;
}

export default { addTransactionService, getAllTransactionsService };