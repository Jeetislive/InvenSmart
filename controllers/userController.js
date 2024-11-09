import AppError from "../error/AppError.js";
import CreateToken  from "../JWTToken/generateToken.js";
import UserService from "../services/UserService.js";

export const addUser = async (req, res, next) => {
    const { username, password, role, email, fullName } = req.body;
    try {
        const userId = await UserService.addUserService(username, password, role, email, fullName);
        res.status(201).json({ message: 'User added successfully.', userId });
    } catch (error) {
        // console.error(error);
        next(error);
    }
}

export const loginUser = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        if (!username || !password ) {
            throw new AppError("Username and Password are Required",404);
        }
        const loginUserDetails = await UserService.loginUserService(username, password);
        if (!loginUserDetails) {
            throw new AppError("Invalid username or password", 401);
        }
        // console.log(loginUserDetails.Role);
        
        const token = CreateToken.createToken(res,username, loginUserDetails.Role);
        if (!token) {
            throw new AppError("Failed to generate token", 500);
        }
        res.status(200).json({ message: 'User logged in successfully.',loginUserDetails, token });
    } catch (error) {
        console.error(error);
        next(error);
        throw new AppError("Failed to login user", 500);
    }
}
