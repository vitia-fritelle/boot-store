import Joi from 'joi';

const categories = ['consoles', 'acessórios', 'jogos'];

export const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
});

export const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
    type: Joi.valid(...categories).required(),
    image: Joi.string().required(),
});

export const signUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/)
        .required(),
    confirmPassword: Joi.valid(Joi.ref('password')).label(
        "passwords don't match",
    ),
});

export const LoginSchema = Joi.invalid(false);
