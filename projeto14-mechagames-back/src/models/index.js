import { signUpSchema } from '../validations';
import CustomError from '../utils';

export const User = function _(name, email, password, confirmpassword = '') {
    this.name = name;
    this.email = email;
    this.password = password;
    const confirmPassword = confirmpassword;

    const validation = signUpSchema.validate(
        {
            name, email, password, confirmPassword,
        },
        { abortEarly: false },
    );
    if (validation.error) {
        throw new CustomError(
            422,
            'Unprocessable Entity',
            validation.error.details.map((err) => err.message).join(', '),
        );
    }
};

export const Cart = function _() {
    this.products = [];

    this.addProducts = (...prods) => prods.forEach((prod) => {
        this.products.push(prod);
    });

    this.removeProducts = (...prods) => {
        this.products = this.products.filter((product) => !!prods.find((prod) => product !== prod));
    };
};

export const Product = function _(name, description, value, type, image) {
    this.name = name;
    this.description = description;
    this.value = value;
    this.type = type;
    this.image = image;
};
