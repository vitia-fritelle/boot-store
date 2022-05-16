import { validateEmail, getSession } from '../../services/cartServices';
import CustomError from '../../utils';

export const updateCart = async (req, res, next) => {
    try {
        const token = (
            req
                .headers
                .authorization
                .replace('Bearer', '')
                .trim()
        );
        if (typeof token === 'string') {
            const user = await validateEmail(token);
            if (user) {
                const { products } = req.body;
                req.session.cart = {
                    name: user.name,
                    email: user.email,
                    products,
                };
                res.sendStatus(204);
            } else {
                throw new CustomError(
                    422,
                    'Unprocessable Entity',
                    "Couldn't find user's e-mail",
                );
            }
        } else {
            throw new CustomError(
                403,
                'Forbidden',
                "Client didn't send token",
            );
        }
    } catch (e) {
        next(e);
    }
};

export const getCart = async (req, res, next) => {
    try {
        const token = (
            req
                .headers
                .authorization
                .replace('Bearer', '')
                .trim()
        );
        if (typeof token === 'string') {
            const cart = await getSession(token);
            res.status(200).json(cart);
        } else {
            throw new CustomError(
                403,
                'Forbidden',
                "Client didn't send token",
            );
        }
    } catch (e) {
        next(e);
    }
};
