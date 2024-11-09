import db from "../database/db.js";
import client from "../database/redisStorage/redisConnect.js";
import AppError from "../error/AppError.js";

const addCategoriesRepo = async (categoryName,description) => {
    const conn = await db.getConnection();
    try {
        await conn.beginTransaction();
        // Check if user with the same email already exists
        const [existingUser] = await conn.execute(
            `SELECT * FROM categories WHERE categoryName =?`,
            [categoryName]
        );
        
        if (existingUser[0]) {
            throw new AppError("Category with the same name already exists",401);
        }
        const [result] = await conn.execute(
            `INSERT INTO categories (categoryName,description) VALUES (?,?)`,
            [categoryName,description]
        );
        
        await client.set(`categoryCache:${result.insertId}`, JSON.stringify({"categoryName":categoryName,"description":categoryName}), {
            EX: 900,
          });
        await conn.commit();
        console.log("Category added successfully!");
        return result.insertId;
    } catch (error) {
        await conn.rollback();
        console.error("Error adding Category:", error);
        throw new AppError("Error adding Category.",500);
    }
    finally {
        await conn.release();
    }
}

const getAllCategoriesRepo = async () => {
    await db.getConnection();
    try {
        const [results] = await db.execute(
            `SELECT * FROM categories`
        );
        if (results.length > 0) {
            return results;
        }
        throw new AppError("No categories found.",404);
    } catch (error) {
        console.error("Error getting all Categories:", error);
        throw new AppError("Error getting all Categories.",500);
    }
}

const getCategoryByIdRepo = async (id) => {
    try {
        //console.log(id);
        const cachedData = await client.get(`categoryCache:${id}`);
        if (cachedData) {
        return JSON.parse(cachedData);
        }
        const [result] = await db.query(
            `SELECT * FROM categories WHERE categoryId = ${id}`
        );
        console.log(result);
        
        await client.set(`categoryCache:${id}`, JSON.stringify(result[0]), {
            EX: 900,
          });
        if (result.length > 0) {
            return result[0];
        }
        throw new AppError("Category not found.",404);
    } catch (error) {
        console.error("Error getting Category by id:", error);
        throw new AppError("Error getting Category by id.",500);
    }
}
export default {
    addCategoriesRepo,
    getAllCategoriesRepo,
    getCategoryByIdRepo,
};