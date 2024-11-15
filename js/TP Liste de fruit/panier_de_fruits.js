document.querySelector("#buttonAddFruits").addEventListener("click", handleAddFruit)

function handleAddFruit() {
    const fruit = document.querySelector('#inputFruit').value

    if (fruit === ''){
        return alert("Veuillez saisir un fruit!!!")
    }

    const row = document.createElement("tr");
    const cellFruit = document.createElement("td")
    cellFruit.innerText = fruit;

    const cellBin = document.createElement("td")
    cellBin.innerHTML = `<button id="remove-btn" class="btn btn-danger"><i class="fa fa-trash"></i></button>`;

    row.appendChild(cellFruit)
    row.appendChild(cellBin)

    document.querySelector("#tableFruitsBody").appendChild(row)

    document.querySelector('#inputFruit').value = ""

    row.querySelector("#remove-btn").addEventListener("click", handleRemove)
}

function handleRemove(event){
    const row = event.target.closest('tr')
    row.remove()
}