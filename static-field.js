class Configuration {
    // static => field di sini akan menjadi milik dari kelas, bukan milik dari objek di bawah
    static name = "Belajar OOP Javascript"
    static version = 1.0
    static author = "Muhammad Iqbal"
}

// cara memanggil
console.log(Configuration.author)