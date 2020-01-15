const faker = require('faker')
class Product {
    constructor(){
        this.name = faker.commerce.productName();
        this.price = `$${faker.commerce.price()}`
        this.department = faker.commerce.department();
    }
}

module.exports = Product
console.log(new Product());