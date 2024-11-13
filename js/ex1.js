const age = prompt("Saisir age!")

if (age < 18) {
    alert("mineur")
}else if ( age > 65) {
    alert("Senior")
} else {
    alert("Majeur")
}

const number = prompt("Saisir nb")

if (number %2 === 0){
    alert("nb pair")
}else {
    alert("nb impair")
}

const month = prompt("Saisir mois")

switch (month.toLowerCase()) {
    case 'janvier' :
        alert("hiver")
    case 'fevrier' :
        alert("hiver")
    case 'mars' :
        alert("printemps")
    case 'avril' :
        alert("printemps")
    case 'mai' :
        alert("printemps")
    case 'juin' :
        alert("ete")
    case 'juillet' :
        alert("ete")
    case 'aout' :
        alert("ete")
    case 'septembre' :
        alert("automne")
    case 'octobre' :
        alert("automne")
    case 'novembre' :
        alert("automne")
    case 'décembre' :
        alert("hiver")
}

const year = prompt('Saisir année')

if (year%4 === 0){
    alert("Bissextile")
} else {
    alert("normale")
}