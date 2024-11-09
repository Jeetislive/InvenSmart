import AppError from "../error/AppError.js";
import SupplierService from "../services/SupplierService.js";

export const addSupplier = async (req, res, next) => {
    const { supplierName, contactName, email, phone, address, city, state, zipCode, country } = req.body;
    try {
        if (!supplierName || !contactName || !email || !phone || !address || !city || !state || !zipCode || !country ) {
            throw new AppError("All fields are Required",404);
        }
        const supplierId = await SupplierService.addSupplierService(supplierName, contactName, email, phone, address, city, state, zipCode, country);
        if (!supplierId) {
            throw new AppError("Failed to add Supplier", 400);
        }
        res.status(201).json({ message: 'Supplier added successfully.', supplierId });
    } catch (error) {
        console.error(error);
        next(error);
    }
}
export const getAllSupplier = async (req,res,next) => {
    try {
        const suppliers = await SupplierService.getAllSuppliersService();
        res.status(200).json(suppliers);
    } catch (error) {
        console.error(error);
        next(error);
    }
}