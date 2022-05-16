import bcrypt from 'bcryptjs';
import mongo from '../../database';
import { LoginSchema } from '../../validations';
import CustomError from '../../utils';

export const validateLogin = async ({ email, password }) => {
    try {
        const users = mongo.db('mecha-games').collection('users');
        const user = await users.findOne({ email });
        if (user) {
            return await LoginSchema.validateAsync(
                await bcrypt.compare(password, user.password),
            );
        }
        throw new CustomError(401, 'Unauthorized', 'email not found');
    } catch (e) {
        if (e instanceof CustomError) {
            throw e;
        } else {
            throw new CustomError(401, 'Unauthorized', 'LoginSchema password=');
        }
    }
};

export const validateSignUp = async ({ name, email, password }) => {
    try {
        const users = mongo.db('mecha-games').collection('users');
        const user = await users.findOne({ email });
        if (user) {
            throw new CustomError(409, 'Conflict', 'User already exists');
        }
        const passwordHash = bcrypt.hashSync(password, 10);
        await users.insertOne({ name, email, password: passwordHash });
    } catch (e) {
        if (e instanceof CustomError) {
            throw e;
        } else {
            throw new CustomError(
                500,
                'Internal Error',
                "Server can't not process your request",
            );
        }
    }
};
