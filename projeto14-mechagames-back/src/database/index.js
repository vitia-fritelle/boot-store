import { MongoClient } from 'mongodb';
import config from '../config';

export default new MongoClient(config.mongodb_url);
