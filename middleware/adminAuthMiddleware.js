import AppError from "../error/AppError.js";
import jwt from 'jsonwebtoken';

export const authenticateAdmin = (req, res, next) => {
    // Middleware to authenticate JWT token
    const token = req.headers.authorization?.split(' ')[1];
    //console.log(token);
    
    if(!token) {
        return next(new AppError('You have to login first to access this route', 401));
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                throw new Error('Invalid or Expired token');
            }
            if (decoded.role === 'Admin') {
                next();
            }
        })
        // If token is valid but user is not admin, throw an error
        //throw new AppError("Invalid Token or expired",404);
    } catch (error) {
        next(error);
    }
}