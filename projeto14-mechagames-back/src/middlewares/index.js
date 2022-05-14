import {CustomError} from "./../utils";

export const handleErrors = (err, _, res, next) => {
	if (err instanceof CustomError) {
		return res.status(err.statusCode).json({message: err.message});
	} else {
		return res.status(500).send("Something broke!");
	}
};
