const dbUrl ='https://test-firebase-8dffb-default-rtdb.europe-west1.firebasedatabase.app/';
const db='liste';

document.getElementById("btnAjouter").onclick = async() => {
    const url =`${dbUrl}${db}.json`;
    const personne = { nom: "Voyage" };
    const response = await axios.post(url,personne);  
    console.log(response.data); // id = response.data;

}
document.getElementById("btnAjouter2").onclick = async() => {
    const id='-OBovnUH-hDOF4D8gSZ-';
    const url =`${dbUrl}${db}/${id}/.json`;
    const personne = { nom: "Aller en Thailande" };
    const response = await axios.post(url,personne);  
    console.log(response.data); // id = response.data;

}
document.getElementById("btnLecture").onclick = async() => {
    const id='-OBovnUH-hDOF4D8gSZ-';
    const url =`${dbUrl}${db}/${id}/.json`;
   
    const response = await axios.get(url);  
    console.log(response.data); // id = response.data;

}