import inventoryRepo from "../repository/inventoryRepo.js";

const adjustInventoryService = async ( productId, adjustmentDate, adjustmentType, quantityChanged, reason) => {
    const insertId = await inventoryRepo.adjustInventoryRepo(productId, adjustmentDate, adjustmentType, quantityChanged, reason);
    return insertId;
}

export default {adjustInventoryService};