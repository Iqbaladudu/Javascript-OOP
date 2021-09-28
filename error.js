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
const result = MathUtil.sum()
console.log(result)