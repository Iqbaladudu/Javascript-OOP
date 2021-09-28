// Membuat class dengan constructor function

// Parameter di Constructor Function

function Person(firstName, lastName) {
    // Menambahkan properti
    this.firstName = firstName;
    this.lastName = lastName;
    // Method
    this.sayHello = function (name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`)
    }
}

// Gunakan keyword new
const irma = new Person()
irma.firstName = "Irma";
irma.lastName = "Gustia"
console.log(irma)
irma.sayHello("Iqbal")
const iqbal = new Person("Muhammad","Iqbal")
console.log(iqbal)