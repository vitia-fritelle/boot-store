
export const User = function(name, email, password) {

    this.name = name;
    this.email = email;
    this.password = password;
};

export const Chart = function(user_id) {

    this.user_id = user_id;
    this.products;

    this.addProduct = function(...prods) {
        return prods.forEach(prod => {
            this.products.append(prod);
        });
    };

    this.removeProduct = function(...prods) {
        this.products = this.products.filter((product) => {
            return !!(prods.find((prod) => product === prod));
        });
        return;
    }
};

export const Product = function(name, description, value, type, image) {

    this.name = name;
    this.description = description;
    this.value = value;
    this.type = type;
    this.image = image;
};