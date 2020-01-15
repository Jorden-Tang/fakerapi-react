const faker = require('faker')
class User {
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.address = faker.address.streetAddress();
        this.phoneNumber = faker.phone.phoneNumber();
    }
}
module.exports = User
console.log(new User());