import db from "../database/db.js";
import AppError from "../error/AppError.js";

const adjustInventoryRepo = async (productId, adjustmentDate, adjustmentType, quantityChanged, reason) => {
    const conn = await db.getConnection();
    try {
        await conn.beginTransaction();
        const [result] = await conn.execute(
            `INSERT INTO inventoryadjustments (ProductID, AdjustmentDate, AdjustmentType, QuantityChanged, Reason) VALUES (?,?,?,?,?)`,
            [productId, adjustmentDate, adjustmentType, quantityChanged, reason]
        );
        if (adjustmentType === "Decrease") {
            await conn.execute(
                `UPDATE products SET quantityInStock = quantityInStock -? WHERE ProductID =?`,
                [quantityChanged, productId]
            );
        } else {
            await conn.execute(
                `UPDATE products SET quantityInStock = quantityInStock +? WHERE ProductID =?`,
                [quantityChanged, productId]
            );
        }
        await conn.commit();
        console.log("Inventory adjusted successfully!");
        return result.insertId;
    } catch (error) {
        await conn.rollback();
        console.error("Error adjusting Inventory:", error);
        throw new AppError("Error adjusting Inventory.",500);
    }
    finally {
        conn.release();
    }
}

export default { adjustInventoryRepo };