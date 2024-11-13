let nb = 0;
while (nb <= 5) {
    nb += 1
    console.log(nb)
    if (nb === 5){
        break
    }
}

const check = prompt('saisir nb')

while (check < 0) {
    check = prompt('saisir nb')
}
console.log(check)

let sum = 0
let number = 0
while (number <= 100) {
    number += 1
    sum += number
    if (number === 100) {
        break
    }
}
console.log(sum)