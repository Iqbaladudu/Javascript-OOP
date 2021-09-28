class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field
    }
}

class MathUtil {
    static sum(...numbers) {
        if(numbers.length === 0) {
            // throw error w/ Validation Error
            throw new ValidationError("Total parameter harus lebih dari 10 [Validation Error]", "numbers")
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
    if (error instanceof ValidationError) {
        console.log(`Terjadi error di field ${error.field} dengan error ${error.message}`)
    } else {
        console.log(`Terjadi error: ${error.message}`)
    }
} finally {
    console.log("Kode program selesai")
}
