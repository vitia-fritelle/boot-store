import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import mongo from '../../database';
import config from '../../config';
import sendGridEmail from '../sendGridEmail';

const savePurchase = async (products, token) => {
	const { email } = jwt.verify(token, config.secret_key);
	const users = mongo.db('mecha-games').collection('users');
	const user = await users.findOne({ email });
	const purchases = mongo.db('mecha-games').collection('purchases');
	await purchases.insertOne({ ...user, _id: new ObjectId(), products });
	sendGridEmail({ name: user.name, email: user.email, products: products });
};

export default savePurchase;
