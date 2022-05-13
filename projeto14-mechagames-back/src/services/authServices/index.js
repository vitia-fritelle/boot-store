import bcrypt from 'bcryptjs';
import mongo from '../..';
import { LoginSchema } from '../../validations';
import { CustomError } from '../../utils';

export const validateLogin = async ({email, password}) => {
    
    try{
        const users = mongo.db('mecha-games').collection('users');
        const user = await users.findOne({email});
        if(user) {
            return await LoginSchema.validateAsync(
                await bcrypt.compare(password, user.password)
            );
        } else {
            throw new CustomError(401,"Unauthorized","email not found");
        }
    } catch (e) {
        throw new CustomError(401,"Unauthorized","LoginSchema password=");
    }
};