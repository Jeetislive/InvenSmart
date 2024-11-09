import db from "../database/db.js";
import AppError from "../error/AppError.js";

const addSupplierRepo = async ( supplierName, contactName, email, phone, address, city, state, zipCode, country ) => {
    const conn = await db.getConnection();
    try {
        await conn.beginTransaction();
        // Check if user with the same email already exists
        const [existingUser] = await conn.execute(
            `SELECT * FROM suppliers WHERE email =?`,
            [email]
        );
        // console.log(existingUser[0]);
        
        if (existingUser[0]) {
            throw new AppError("Supplier with the same email already exists.",401);
        }
        const [result] = await conn.execute(
            `INSERT INTO suppliers (SupplierName, ContactName, Email, Phone, Address, City, State, ZipCode, Country) VALUES (?,?,?,?,?,?,?,?,?)`,
            [supplierName, contactName, email, phone, address, city, state, zipCode, country]
        );
        await conn.commit();
        console.log("Supplier added successfully!");
        return result.insertId;
    } catch (error) {
        await conn.rollback();
        console.error("Error adding Supplier:", error);
        throw new AppError("Error adding Supplier.",500);
    }
    finally {
        conn.release();
    }
}

const getAllSuppliersRepo = async () => {
    try {
        const [suppliers] = await db.execute(
            `SELECT * FROM suppliers`
        );
        console.log("Suppliers retrieved successfully!",suppliers);
        return suppliers;
    } catch (error) {
        console.error("Error getting Suppliers:", error);
        throw new AppError("Error getting Suppliers.",500);
    }
}

export default {
    addSupplierRepo,
    getAllSuppliersRepo
};