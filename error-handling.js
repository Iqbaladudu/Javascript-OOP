class MathUtil {
    static sum(...numbers) {
        if(numbers.length === 0) {
            // throw error
            throw new Error("Total parameter harus lebih dari 0")
        }
        let total = 0
        for (const number of numbers) {
            total += number
        }
        return total
    }
}

try {
    console.info(MathUtil.sum())
    console.log("Iqbal di dalam try")
} catch (error) {
    console.log(`Terjadi error: ${error.message}`)
} finally {
    console.log("Kode program selesai")
}

console.log("Iqbal")

class Counter {
    #counter = 1
    next() {
        try {
            return this.#counter
        } finally {
            this.#counter++
        }
    }
}

const counter = new Counter();
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())