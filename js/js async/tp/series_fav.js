let series = []

document.querySelector('#btn-search').addEventListener('click', getSerie)

async function getSerie() {
    const name = document.querySelector("#searchbar").value;
    const response = await fetch("http://www.omdbapi.com/?apikey=efdc2275&s="+name);
    series = await response.json()

    document.querySelector('#tableSerieBody').remove()
    window.localStorage.setItem('searched', JSON.stringify(series.Search))
    searchedSerie()
}

function searchedSerie(){
    seriesSearched = JSON.parse(window.localStorage.getItem('searched')) || []
    const tablebody = document.createElement("tbody")
    tablebody.id = "tableSerieBody"

    document.querySelector(".table-striped").appendChild(tablebody)

    for (let i = 0; i < seriesSearched.length; i++) {
        const row = document.createElement("tr");
        row.dataset.id = seriesSearched[i].imdbID

        const cellName = document.createElement("td")
        cellName.innerText = seriesSearched[i].Title
        const cellYear = document.createElement("td")
        cellYear.innerText = seriesSearched[i].Year
        const cellImage = document.createElement("td")
        cellImage.innerHTML= `
                <img
                    src="${seriesSearched[i].Poster}"
                    width="80"
                />`
        
        
        const cellButton = document.createElement("td");
        const button = document.createElement("button");
        button.className = "btn btn-outline-secondary";
        const icon = document.createElement("i");
        icon.className = "fa fa-plus";
        button.appendChild(icon);
        cellButton.appendChild(button);
    
        row.appendChild(cellName);
        row.appendChild(cellYear);
        row.appendChild(cellImage);
        row.appendChild(cellButton);

        
        const table = document.querySelector("#tableSerieBody")
        table.appendChild(row)

        row.querySelector(".btn-outline-secondary").addEventListener("click", addToWatch);

    }
}
    
    
function addToWatch(event){
    const row = event.target.closest("tr");
    row.querySelector(".btn-outline-secondary").className = "btn btn-outline-danger"
    row.querySelector(".fa-plus").className = "fa fa-trash"

    const table = document.querySelector("#tableToWatchBody")
    table.appendChild(row)
    row.querySelector("button").addEventListener("click", handleRowRemove);
}


function handleRowRemove(event) {
    const row = event.target.closest("tr");
    row.remove();
  }