import supplierRepo from "../repository/supplierRepo.js";

const addSupplierService = async ( supplierName, contactName, email, phone, address, city, state, zipCode, country ) => {
    const insertId = await supplierRepo.addSupplierRepo(supplierName, contactName, email, phone, address, city, state, zipCode, country);
    return insertId;
}
const getAllSuppliersService = async () => {
    const suppliers = await supplierRepo.getAllSuppliersRepo();
    return suppliers;
}

export default { addSupplierService, getAllSuppliersService };