import AppError from "../error/AppError.js";
import InventoryService from "../services/InventoryService.js";

export const adjustInventory = async (req, res, next) => {
    const { productId, adjustmentDate, adjustmentType, quantityChanged, reason } = req.body;
    try {
        if (!productId || !adjustmentDate || !adjustmentType || !quantityChanged || !reason ) {
            throw new AppError("All fields are Required",404);
        }
        const adjustInventoryId = await InventoryService.adjustInventoryService(productId, adjustmentDate, adjustmentType, quantityChanged, reason);
        if (!adjustInventoryId) {
            throw new AppError("Failed to adjust Inventory", 400);
        }
        res.status(201).json({ message: 'Inventory Adjusted successfully.'});
    } catch (error) {
        console.error("Failed to adjust Inventory",error);
        next(error);
    }
}