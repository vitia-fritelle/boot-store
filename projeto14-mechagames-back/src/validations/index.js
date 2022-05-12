import Joi from 'joi';
import { categories } from '../models';

export const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});

export const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
    type: Joi.valid(...categories).required(),
    image: Joi.string().required()
});

export const LoginSchema = Joi.invalid(false);