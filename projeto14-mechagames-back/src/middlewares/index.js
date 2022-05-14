import {CustomError} from "./../utils";

export const handleErrors = (err, _, res, _next) => {
    
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send(err.message);
    } else {
        return res.status(500).send('Something broke!');
    }
};
