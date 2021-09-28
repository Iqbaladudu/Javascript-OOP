function Person(firstName, lastName) {
    // Menambahkan properti
    this.firstName = firstName;
    this.lastName = lastName;
    // Method
    this.sayHello = function (name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`)
    }
}
// menambah properti/Method ke prototype
Person.prototype.sayBye = function () {
    console.log("Good bye")
}
Person.prototype.run = function () {
    console.log(`${this.firstName} is running`)
}

// Gunakan keyword new
const irma = new Person("Irma", "Gustia")
const iqbal = new Person("Muhammad", "Iqbal")