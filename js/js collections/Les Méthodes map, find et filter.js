const numbers = [0, 20, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//a
let numbersTimeTwo = numbers.map(num => num*2)
console.log(numbersTimeTwo)

//b
let findNumber = numbers.find((num) => num > 8)
console.log(findNumber)

//c
const filteredNumbers = numbers.filter((num)=> num % 2 === 0)
console.log(filteredNumbers)

//d
let FizzBuzz = numbers.map(num =>{
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
})
console.log(FizzBuzz)