import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

export default function App() {
    const [tuiles, setTuiles] = useState([])
    const list = [...Array(42)].map((elem, i) => i)
    
    useEffect (() => {

        let tuilesToPlace = shuffle(list)
        let tuilesList = []
        while (tuilesList.length < 32) {
            const randomNumber = Math.floor(Math.random()* 16)
            const myTuile = tuilesToPlace[randomNumber]
            const count = tuilesList.filter((num) => num === randomNumber).length;

            if (count < 2){
                tuilesList.push(randomNumber)
            }
        }
        let allTuiles = []
        for (let i = 0; i < tuilesList.length; i++) {
            allTuiles.push({id:i, img:tuilesList[i], isSelected:false, isFound:false})
        }
        setTuiles(allTuiles)
    },[]);

    function shuffle(array) {
        let currentIndex = array.length;
      
        while (currentIndex != 0) {
      
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        const sliceStart = Math.floor(Math.random()* array.length-16)

        return array.slice(sliceStart, sliceStart+16)
    }

    function handleChangeSelected(tuile) {
        let newTuiles = [...tuiles]
        newTuiles[tuile.id].isSelected = !newTuiles[tuile.id].isSelected

        setTuiles(newTuiles)

        const selectedTuiles = tuiles.filter((tuile) => tuile.isSelected === true)
        console.log(selectedTuiles)
        if (selectedTuiles.length === 2){
            handleCompareTuiles(selectedTuiles)
        }

    }
    
    function handleCompareTuiles(selectedTuiles) {
        let newTuiles = [...tuiles]

        if (selectedTuiles[0].img === selectedTuiles[1].img ){
            newTuiles[selectedTuiles[0].id].status = 'found'
            newTuiles[selectedTuiles[1].id].status = 'found'
        }

        newTuiles[selectedTuiles[0].id].isSelected = false
        newTuiles[selectedTuiles[1].id].isSelected = false

        setTuiles(newTuiles)
    }

    function handleChangeStatus(array){
        return array.isFound = true 
    }
    return (
    <>
      <div className="container">
        {tuiles.length > 0 && tuiles.map((tuile, key) => <Card handleChangeSelected={handleChangeSelected} key={key} item={tuile}></Card>)}
      </div>
      <div id="demo">
      </div>
    </>
  );
}