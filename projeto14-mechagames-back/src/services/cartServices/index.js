import jwt from 'jsonwebtoken';
import mongo from '../../database';
import config from '../../config';

export const validateEmail = async (token) => {
    const { email } = jwt.verify(token, config.secret_key);
    const users = mongo.db('mecha-games').collection('users');
    const user = await users.findOne({ email });
    const sessions = mongo.db('mecha-games').collection('carts');
    await sessions.deleteMany({ 'session.cart.email': user.email });
    return user;
};

export const getSession = async (token) => {
    const { email } = jwt.verify(token, config.secret_key);
    const users = mongo.db('mecha-games').collection('users');
    const user = await users.findOne({ email });
    const sessions = mongo.db('mecha-games').collection('carts');
    const { session } = await sessions.findOne({ 'session.cart.email': user.email });
    return session.cart;
};
