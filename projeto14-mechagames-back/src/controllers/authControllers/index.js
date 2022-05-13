import jwt from "jsonwebtoken";
import {validateLogin} from "../../services/authServices";
import config from "../../config";

export const login = async (req, res, next) => {
	try {
		const {email, password} = req.body;
		await validateLogin({email, password});
		const configurations = {expiresIn: 60 * 60};
		const token = jwt.sign({email}, config.secret_key, configurations);
		return res.status(200).json({token});
	} catch (e) {
		next(e);
	}
};

export const signUp = async (req, res, next) => {
	try {
		const {name, email, password} = req.body;
		await validateSignUp({name, email, password});
		return res.status(201).json({message: "User created"});
	} catch (e) {
		next(e);
	}
};
