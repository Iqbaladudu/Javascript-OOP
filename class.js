class Person {
    // constructor Class
    constructor(name) {
        // properti di dalam konstruktor
        this.name = name
        console.log(`Membuat Person ${this.name}`)
    }
    // Method di Class ==> otomatis dimasukkan ke dalam prototype
    sayHello (name) {
        console.log(`Halo ${this.name}`)
    }
}

const iqbal = new Person("Iqbal")

// Inheritance
class Employee {
    constructor(firstName) {
        this.firstName = firstName;
    }
    sayHello(name) {
        console.log(`Hello ${name}, this is ${this.firstName}`)
    }
}

class Manager extends Employee {
    // super constructor
    constructor(firstName, lastName) {
        // super constructor harus dipanggil meskipun parentnya tidak ada constructor
        super(firstName);
        this.lastName = lastName
    }
    // Super in method
    sayHello(name) {
        super.sayHello()
        console.log("Dari child")
    }
}

const dudu = new Employee("Iqbal")
dudu.sayHello("Irma")

const irma = new Manager("Irma");
irma.sayHello("Iqbal")