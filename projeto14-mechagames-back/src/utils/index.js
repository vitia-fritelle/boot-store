export const CustomError = function(statusCode, errorName, message) {
    this.statusCode = statusCode;
    this.errorName = errorName;
    this.message = message;
}
CustomError.prototype = new Error();
