import jwt from 'jsonwebtoken';
import mongo from '../../database';
import config from '../../config';

const savePurchase = async (products, token) => {
    const { email } = jwt.verify(token, config.secret_key);
    const users = mongo.db('mecha-games').collection('users');
    const user = await users.findOne({ email });
    const purchases = mongo.db('mecha-games').collection('purchases');
    await purchases.insertOne({ ...user, products });
};

export default savePurchase;
