import AppError from "../error/AppError.js";
import CustomerService from "../services/CustomerService.js";

export const addCustomer = async (req, res, next) => {
    const { customerName, email, phone, address, city, state, zipCode, country } = req.body;
    try {
        if (!customerName || !email || !phone || !address || !city || !state || !zipCode || !country ) {
            throw new AppError("All fields are Required",404);
        }
        const customerId = await CustomerService.addCustomerService(customerName, email, phone, address, city, state, zipCode, country);
        if (!customerId) {
            throw new AppError("Failed to add user", 400);
        }
        res.status(201).json({ message: 'Customer added successfully.', customerId });
    } catch (error) {
        console.error(error);
        next(error);
    }
}
export const getAllCustomers = async (req,res,next) => {
    try {
        const customers = await CustomerService.getAllCustomersService();
        res.status(200).json(customers);
    } catch (error) {
        console.error(error);
        next(error);
    }
}