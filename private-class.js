class Counter {
    #counter = 0;
    increment() {
        this.#counter++;
    }
    decrement() {
        this.#counter--;

    }
    get() {
        return this.#counter;
    }
}
const first = new Counter()
first.increment()
first.increment()
first.increment()
console.log(first.get())