import jwt from 'jsonwebtoken';
import mongo from '../../database';
import config from '../../config';

export default async (token) => {
    const { email } = jwt.verify(token, config.secret_key);
    const users = mongo.db('mecha-games').collection('users');
    return users.findOne({ email });
};
