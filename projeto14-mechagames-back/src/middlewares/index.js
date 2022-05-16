import CustomError from '../utils';

export default (err, _, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send(err.message);
    }
    return res.status(500).send('Something broke!');
};
