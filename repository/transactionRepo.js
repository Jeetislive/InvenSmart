import db from "../database/db.js";
import AppError from "../error/AppError.js";
import { sendTransactionMail } from "../mailHandling/emails.js";

const addTransactionRepo = async (customerId, transactionDate, totalAmount, items) => {
    items.forEach(item =>  {
        item.productName = ""
    });
    const conn = await db.getConnection();
    try {
        await conn.beginTransaction();
        const [result] = await conn.execute(
            `INSERT INTO transactions (CustomerID, TransactionDate, totalAmount) VALUES (?,?,?)`,
            [customerId, transactionDate, totalAmount]
        );
        
        items.forEach(async item => {
            let [product] = await conn.execute(
                `SELECT productName FROM products WHERE productId = ?`,[item.productId]
            );
            if (product.length > 0) {
                item.productName = product[0].productName;
            }
            let subTotal = item.unitPrice;
            if (item.quantity > 1) {
                subTotal *= item.quantity;
            }
            await conn.execute(
                `INSERT INTO transactiondetails (TransactionID, ProductID, Quantity, UnitPrice, Subtotal) VALUES (?,?,?,?,?)`,
                [result.insertId,item.productId,item.quantity,item.unitPrice,subTotal]
            );
            // console.log(item);
        });
        // console.log(items);
        
        const customerEmail = await conn.query(`SELECT Email FROM customers where CustomerID = ?;`,[customerId]);
        const subTotal = await conn.query(`SELECT sum(Subtotal) FROM transactiondetails where TransactionID = ?;`, [result.insertId]);
        let transactionId = result.insertId;

        await sendTransactionMail(customerId,customerEmail[0][0].Email, transactionDate, totalAmount, items, subTotal[0][0]["sum(Subtotal)"],transactionId);

        
        await conn.commit();
        console.log("Transaction added successfully!");
        return result.insertId;
    } catch (error) {
        await conn.rollback();
        console.error("Error adding Transaction:", error);
        throw new AppError("Error adding Transaction.",500);
    }
    finally {
        conn.release();
    }
}

const getAllTransactionsRepo = async () => {
    try {
        const [transactions] = await db.execute(
            `SELECT * FROM transactions`
        );
        console.log("Transactions retrieved successfully!",transactions);
        return transactions;
    } catch (error) {
        console.error("Error getting Transactions:", error);
        throw new AppError("Error getting Transactions.",500);
    }
}

export default { addTransactionRepo, getAllTransactionsRepo };