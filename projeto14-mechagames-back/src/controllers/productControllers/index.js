import {validateProductPage} from '../../services/productServices';

export const ProductPage = async (req, res, next) => {
	const {idProduct} = req.params;

	try {
		const product = await validateProductPage(idProduct);
		res.status(200).json(product);
	} catch (e) {
		next(e);
	}
};
