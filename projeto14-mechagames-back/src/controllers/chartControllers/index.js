import validateEmail from '../../services/chartServices';
import CustomError from '../../utils';

export const updateChart = async (req, res, next) => {
    try {
        const token = (
            req
                .headers
                .authorization
                ?.replace('Bearer', '')
                .trim()
        );
        if (token) {
            const user = validateEmail(token);
            if (user) {
                const { products } = req.body;
                req.session.chart = {
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

export const getChart = async (req, res, next) => {
    try {
        const token = (
            req
                .headers
                .authorization
                ?.replace('Bearer', '')
                .trim()
        );
        if (token) {
            res.status(200).send(req.sessions.chart);
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
