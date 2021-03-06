import { ObjectId } from 'mongodb';
import mongo from '../../database';
import CustomError from '../../utils';

export const validateProductPage = async (idProduct) => {
    try {
        const product = await mongo
            .db('mecha-games')
            .collection('products')
            .findOne({ _id: new ObjectId(idProduct) });
        if (product) {
            return product;
        }
        throw new CustomError(404, 'Not found', 'product not found');
    } catch (e) {
        if (e instanceof CustomError) {
            throw e;
        } else {
            throw new CustomError(
                401,
                'Unauthorized',
                'Error validate product page',
            );
        }
    }
};

export const findProducts = async (type, sort = 'asc', limit = 0) => {
    const products = mongo.db('mecha-games').collection('products');
    const sorting = sort === 'desc' ? { value: -1 } : { value: 1 };
    const typing = type ? { type } : {};
    return (
        products
            .find(typing)
            .sort(sorting)
            .limit(limit)
            .toArray()
    );
};
