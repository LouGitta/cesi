const numbers = [0, 20, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//a
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])  
}

//b
for (const number of numbers) {
    console.log(number)
}

//c
number.forEach(number => {
    console.log(number)
});

//d
let total = 0
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
}
console.log(total)

//e
for (let i = 0; i < numbers.length; i++) {
    numbers[i] > 5 ? console.log(numbers[i]) : null
}