// Fonction pour afficher les équipes
const afficherEquipeHTML = () => {
    // Sélection des éléments HTML nécessaires
    const t = document.querySelector(".equipe");
    const n = document.getElementById("templateEquipe");
    const r = document.getElementById("selectEquipe");

    // Réinitialiser le contenu des conteneurs
    t.innerHTML = "";
    r.innerHTML = "";

    // Ajouter l'option "Pas d'équipe" dans le menu déroulant
    const defaultOption = document.createElement("option");
    defaultOption.value = -1;
    defaultOption.innerText = "Pas d'équipe";
    r.appendChild(defaultOption);

    // Parcourir les équipes de l'entreprise
    let index = 0;
    for (let e of entreprise.equipes) {
        const equipeTemplate = n.content.cloneNode(true);

        // Configurer les données de l'équipe
        equipeTemplate.querySelector("table").setAttribute("data-indice", index);
        equipeTemplate.querySelector("h3").innerHTML = e.nom;

        // Configurer le bouton pour enlever l'équipe
        const btnDelEquipe = equipeTemplate.querySelector(".btn-enlever-equipe");
        btnDelEquipe.onclick = (ev) => {
            const indice = ev.target.closest("table").dataset.indice;
            entreprise.equipes.splice(indice, 1);
            afficherEquipeHTML();
        };

        // Ajouter l'équipe dans le menu déroulant
        const option = document.createElement("option");
        option.value = index;
        option.innerText = e.nom;
        r.appendChild(option);

        // Ajouter les membres de l'équipe
        const tbodyEquipe = equipeTemplate.querySelector(".tbodyEquipe");
        const templatePersonne = document.getElementById("templateEquipePersonne");
        for (let personne of e.personnes) {
            const personneTemplate = templatePersonne.content.cloneNode(true);
            const cells = personneTemplate.querySelectorAll("td");
            cells[0].innerHTML = personne.prenom;
            cells[1].innerHTML = personne.nom;
            tbodyEquipe.appendChild(personneTemplate);
        }

        // Ajouter l'équipe dans le DOM
        t.appendChild(equipeTemplate);
        index++;
    }
};

// Fonction pour mélanger un tableau
function obama(arr) {
    const shuffled = [];
    for (let i = 0; i < arr.length; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * arr.length);
        } while (shuffled[randomIndex] != null);
        shuffled[randomIndex] = arr[i];
    }
    return shuffled;
}

// Initialisation des images
let images = [];
for (let i = 0; i < 12; i++) images.push(i);
images = obama(images).slice(0, 12);
const doubledImages = obama(images.concat(images));

const container = document.querySelector(".container");
for (let img of doubledImages) {
    const div = document.createElement("div");
    const imgElem = document.createElement("img");
    imgElem.src = "img/" + img + ".webp";
    div.appendChild(imgElem);
    container.appendChild(div);
}

// Logique du jeu de correspondance
let firstSelection = -1;
let matches = 0;
const startTime = new Date();
const imageElements = document.querySelectorAll(".container img");

for (let i = 0; i < imageElements.length; i++) {
    imageElements[i].onclick = (e) => {
        if (firstSelection === -1) {
            firstSelection = i;
            e.target.parentElement.classList.add("green");
        } else {
            imageElements[firstSelection].parentElement.classList.remove("green");
            if (firstSelection !== i && doubledImages[firstSelection] === doubledImages[i]) {
                imageElements[firstSelection].remove();
                imageElements[i].remove();
                matches++;
                if (matches === 12) {
                    const elapsedTime = ((new Date()).getTime() - startTime.getTime()) / 1000;
                    alert(`Temps écoulé: ${elapsedTime} secondes`);
                }
            }
            firstSelection = -1;
        }
    };
}

// Fonction pour afficher les personnes
const afficherPersonneHTML = () => {
    const tbody = document.getElementById("tbodyPersonne");
    const template = document.getElementById("templatePersonne");

    tbody.innerHTML = ""; // Réinitialiser le tableau

    for (let personne of entreprise.personnes) {
        const rowTemplate = template.content.cloneNode(true);
        rowTemplate.querySelector("tr").setAttribute("data-id", personne.id);

        const cells = rowTemplate.querySelectorAll("td");
        cells[0].innerHTML = personne.prenom;
        cells[1].innerHTML = personne.nom;

        tbody.appendChild(rowTemplate);
    }
};

// Ajouter une nouvelle équipe
const afficherEquipeHTML2 = () => {
    const equipeName = document.getElementById("equipe").value;
    document.getElementById("equipe").value = "";
    const newEquipe = new Equipe(equipeName);

    entreprise.equipes.push(newEquipe);
    console.log(entreprise);
    afficherEquipeHTML();
};

// Ajouter une nouvelle personne
const afficherEquipeHTML3 = () => {
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const equipeIndex = document.getElementById("selectEquipe").value;

    // Réinitialiser les champs du formulaire
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("selectEquipe").value = -1;

    // Créer une nouvelle personne
    const id = Date.now();
    const newPersonne = new Personne(id, prenom, nom);

    entreprise.personnes.push(newPersonne);
    afficherPersonneHTML();

    // Ajouter la personne à une équipe si sélectionnée
    if (equipeIndex != -1) {
        entreprise.equipes[equipeIndex].personnes.push(newPersonne);
        afficherEquipeHTML();
    }
};