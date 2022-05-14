import mongo from '../..';
import {CustomError} from '../../utils';
import {ObjectId} from 'mongodb';

export const validateProductPage = async (idProduct) => {
	try {
		const product = await mongo
			.db('mecha-games')
			.collection('products')
			.findOne({_id: new ObjectId(idProduct)});
		if (product) {
			return product;
		} else {
			throw new CustomError(404, 'Not found', 'product not found');
		}
	} catch (e) {
		if (e instanceof CustomError) {
			throw e;
		} else {
			throw new CustomError(
				401,
				'Unauthorized',
				'Error validate product page'
			);
		}
	}
};
