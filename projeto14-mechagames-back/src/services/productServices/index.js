import mongo from '../..';
import {CustomError} from '../../utils';

export const validateProductPage = async (idProduct) => {
	try {
		const product = mongo
			.db('mecha-games')
			.collection('products')
			.findOne({_id: idProduct});
		if (!product) {
			throw new CustomError(404, 'Not found', 'product not found');
		} else {
			return product;
		}
	} catch (e) {
		if (e instanceof CustomError) {
			throw e;
		} else {
			throw new CustomError(
				401,
				'Unauthorized',
				'Error validate Product Page'
			);
		}
	}
};
