class Personne {
  constructor(prenom, nom, status = true) {
    this.prenom = prenom;
    this.nom = nom;
    this.status = status;
  }
}

class PersonneManager {
  constructor() {
    this.personnes = JSON.parse(localStorage.getItem('personnes'))
    this.renderTable();
  }

  addPersonne(prenom, nom) {
    const newPersonne = new Personne(prenom, nom);
    this.personnes.push(newPersonne);
    this.saveToLocalStorage();
    this.renderTable();
  }

  removePersonne(index) {
    this.personnes.splice(index, 1);
    this.saveToLocalStorage();
    this.renderTable();
  }

  toggleStatus(index) {
    this.personnes[index].status = !this.personnes[index].status;
    this.saveToLocalStorage();
    this.renderTable();
  }

  saveToLocalStorage() {
    localStorage.setItem('personnes', JSON.stringify(this.personnes));
  }

  renderTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    this.personnes.forEach((personne, index) => {
      const row = document.createElement('tr');
      row.className = personne.status ? 'table-success' : 'table-danger';
      row.dataset.indice = index;

      row.innerHTML = `
        <td>${personne.prenom}</td>
        <td>${personne.nom}</td>
        <td>
          <button class="btn btn-danger" onclick="manager.removePersonne(${index})">
            <i class="fa fa-trash"></i>
          </button>
        </td>
        <td>
          <button class="btn btn-warning" onclick="manager.toggleStatus(${index})">
            <i class="fa fa-check"></i>
          </button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
}

const manager = new PersonneManager();
document.querySelector('.btn-success').addEventListener('click', () => {
  const prenom = document.querySelector("Prénom").value.trim();
  const nom = document.querySelector("Nom").value.trim();

  if (prenom && nom) {
    manager.addPersonne(prenom, nom);
  } else {
    alert('Veuillez entrer un prénom et un nom.');
  }
});