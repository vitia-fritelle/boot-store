import {signUpSchema} from "../validations";
import {CustomError} from "./../utils";

export const categories = ["consoles", "acessórios", "jogos"];

export const User = function (name, email, password, confirmpassword = "") {
	this.name = name;
	this.email = email;
	this.password = password;
	const confirmPassword = confirmpassword;

	const validation = signUpSchema.validate(
		{name, email, password, confirmPassword},
		{abortEarly: false}
	);
	if (validation.error) {
		throw new CustomError(
			422,
			"Unprocessable Entity",
			validation.error.details.map((err) => err.message).join(", ")
		);
	}
};

export const Chart = function (user_id) {
	this.user_id = user_id;
	this.products = [];

	this.addProducts = (...prods) => {
		return prods.forEach((prod) => {
			this.products.push(prod);
		});
	};

	this.removeProducts = (...prods) => {
		this.products = this.products.filter((product) => {
			return !!prods.find((prod) => product !== prod);
		});
		return;
	};
};

export const Product = function (name, description, value, type, image) {
	this.name = name;
	this.description = description;
	this.value = value;
	this.type = type;
	this.image = image;
};
