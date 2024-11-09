import db from "../database/db.js";
import AppError from "../error/AppError.js";
import { sendWelcomeEmail } from "../mailHandling/emails.js";

const addCustomerRepo = async( customerName, email, phone, address, city, state, zipCode, country ) => {
    const conn = await db.getConnection();
    try {
        await conn.beginTransaction();
        // Check if user with the same email already exists
        const [existingUser] = await conn.execute(
            `SELECT * FROM customers WHERE email =?`,
            [email]
        );
        console.log(existingUser[0]);
        
        if (existingUser[0]) {
            throw new AppError("Customer with the same email already exists.",401);
        }
        const [result] = await conn.execute(
            `INSERT INTO customers (CustomerName, Email, Phone, Address, City, State, ZipCode, Country) VALUES (?,?,?,?,?,?,?,?)`,
            [customerName, email, phone, address, city, state, zipCode, country]
        );
        await conn.commit();
        console.log("Customer added successfully!");
        await sendWelcomeEmail(email, customerName);
        return result.insertId;
    } catch (error) {
        await conn.rollback();
        console.error("Error adding Customer:", error);
        throw new AppError("Error adding Customer.",500);
    }
    finally {
        conn.release();
    }
}

const getAllCustomersRepo = async() => {
    try {
        const [customers] = await db.execute(
            `SELECT * FROM customers`
        );
        console.log("Customers retrieved successfully!",customers);
        return customers;
    } catch (error) {
        console.error("Error getting Customers:", error);
        throw new AppError("Error getting Customers.",500);
    }
}

export default {
    addCustomerRepo,
    getAllCustomersRepo
};