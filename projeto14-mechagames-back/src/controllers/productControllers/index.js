import { validateProductPage, findProducts } from '../../services/productServices';

export const ProductPage = async (req, res, next) => {
    const { idProduct } = req.params;

    try {
        const product = await validateProductPage(idProduct);
        res.status(200).json(product);
    } catch (e) {
        next(e);
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * limit = integer
 * type = "acessórios", "consoles", "games"
 * sort = "asc", "desc"
 */
export const getProducts = async (req, res, next) => {
    try {
        const { limit, type, sort } = req.query;
        const products = await findProducts(type, sort, parseInt(limit, 10));
        res.status(200).json(products);
    } catch (e) {
        next(e);
    }
};
