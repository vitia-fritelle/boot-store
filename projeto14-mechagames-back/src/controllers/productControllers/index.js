import findProducts from '../../services/productServices';

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * limit = integer
 * type = "acessórios", "consoles", "games"
 * sort = "asc", "desc"
 */
export default async (req, res, next) => {
    try {
        const { limit, type, sort } = req.query;
        const products = await findProducts(type, sort, parseInt(limit, 10));
        res.status(200).json(products);
    } catch (e) {
        next(e);
    }
};
