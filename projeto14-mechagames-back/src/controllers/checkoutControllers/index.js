import savePurchase from '../../services/purchaseServices';

export default finishPurchase = async (req, res, next) => {
    try {
        const token = (
            req
                .headers
                .authorization
                .replace('Bearer', '')
                .trim()
        );
        if (typeof token === 'string') {
            const {products} = req.body;
            await savePurchase(products, token);
            res.sendStatus(204);
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