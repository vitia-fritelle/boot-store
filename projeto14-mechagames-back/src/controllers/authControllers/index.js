import jwt from 'jsonwebtoken';
import { validateLogin } from '../../services/authServices/loginServices';
import config from '../../config';

export const login = async (req,res,next) => {
    
    try {
        const { email, password } = req.body;
        const validation = await validateLogin({ email, password });
        const configurations = { expiresIn: 60*60 };
        const token = jwt.sign({ email }, config.secret_key, configurations);
        return res.status(200).json({ token });
    } catch (e) {
        next(e);
    }
};
