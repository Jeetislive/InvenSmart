import AppError from "../error/AppError.js";
import userRepo from "../repository/userRepo.js";

const addUserService = async ( username, password, role, email, fullName) => {
    try {
        return await userRepo.addUserRepo(username, password, role, email, fullName); 
    } catch (error) {
        if(error.message === "Failed to add user"){
            throw new AppError(error.message,500);
        }
        throw new AppError(error.message,404);
        
    }
}
const loginUserService = async (username, password) => {
    const loginUserDetails = await userRepo.loginUserRepo(username, password);
    return loginUserDetails;
}

export default {
    addUserService,
    loginUserService,
 };
 