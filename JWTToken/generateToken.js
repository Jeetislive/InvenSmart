import jwt from 'jsonwebtoken';

const createToken = (res,userName,userRole) => {
    const token = jwt.sign({
        username: userName,
        role: userRole
     }, process.env.JWT_SECRET, {
        expiresIn: '7d'
     });
     res.cookie("token", token, {
		httpOnly: false,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: 7 * 24 * 60 * 60 * 1000,
	});
    return token;
 }

 export default {createToken};