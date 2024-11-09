import customerRepo from "../repository/customerRepo.js";

// Service layer for customer operations
export const addCustomerService = async ( customerName, email, phone, address, city, state, zipCode, country) => {
    const insertId = await customerRepo.addCustomerRepo(customerName, email, phone, address, city, state, zipCode, country);
    return insertId;
}
export const getAllCustomersService = async () => {
    const customers = await customerRepo.getAllCustomersRepo();
    return customers;
}

export default { addCustomerService, getAllCustomersService };