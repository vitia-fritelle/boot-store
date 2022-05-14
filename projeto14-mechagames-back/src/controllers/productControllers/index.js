import Joi from "joi";
import {findProducts} from "../../services/productServices";

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
        const {limit, type, sort} = req.query;
        const products = await findProducts(type,sort,parseInt(limit));
        res.status(200).json(products);
    } catch (e) {
        next(e);
    }
}