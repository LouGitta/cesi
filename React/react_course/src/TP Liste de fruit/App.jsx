import { useState } from "react";
import FruitRow from "./components/FruitRow";

export default function App() {
    const [newFruit, setNewFruit] = useState("");
    const [fruits, setFruits] = useState([
        { id: 1, name: "cerise" },
        { id: 2, name: "fraise" },
        { id: 3, name: "citron" },
        { id: 4, name: "orange" },
        { id: 5, name: "litchi" },
      ]);
    

      function handleAddFruit(){
        const ids = fruits.map((fruit) => fruit.id)
        setFruits([...fruits, {id:Math.max(...ids)+1, name: newFruit}])

      }

      function handleDeleteFruit(id) {
        setFruits(fruits.filter((fruit) => fruit.id != id))
        console.log(id)
      }

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <a className="navbar-brand" href="#!">
              <i className="fa-solid fa-lemon"></i> Liste de fruits
            </a>
          </div>
        </nav>
        <div className="container p-5">
          <div className="col-4">
            <div className="row">
              <div className="col-10">
                <input
                  type="text"
                  className="form-control"
                  id="fruit"
                  placeholder="fruit"
                  onChange={(e) => setNewFruit(e.target.value)}
                />
              </div>
              <div className="col-2">
                <button className="btn btn-success" id="btnAjouter" onClick={handleAddFruit}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <table className="table table-striped mt-4">
              <thead>
                <tr>
                  <th>Fruit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="myTbody">
                {fruits.map(fruit => <FruitRow key={fruit.id} fruit={fruit} handleDeleteFruit={handleDeleteFruit}></FruitRow>)}
              </tbody>
            </table>
          </div>
        </div>
        <footer className="py-5 bg-dark">
          <div className="container px-4 px-lg-5">
            <p className="m-0 text-center text-white">Copyright &copy;IMC 2023</p>
          </div>
        </footer>
      </>
    );
  }