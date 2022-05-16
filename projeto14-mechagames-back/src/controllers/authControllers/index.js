import jwt from 'jsonwebtoken';
import { validateLogin, validateSignUp } from '../../services/authServices';
import { User } from '../../models';
import config from '../../config';

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        await validateLogin({ email, password });
        const configurations = { expiresIn: 60 * 60 * 24 };
        const token = jwt.sign({ email }, config.secret_key, configurations);
        res.status(200).json({ token });
    } catch (e) {
        next(e);
    }
};

export const signUp = async (req, res, next) => {
    const {
        name, email, password, confirmPassword,
    } = req.body;
    try {
        const user = new User(name, email, password, confirmPassword);
        await validateSignUp(user);
        res.status(201).json({ message: 'User created' });
    } catch (e) {
        next(e);
    }
};
