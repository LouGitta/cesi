import { useState } from "react";

export default function App() {
  const [weight, setWeight] = useState('');
  const [size, setSize] = useState('');
  const [activeItem, setActiveItem] = useState({  
    imc:'',
    slice:'',
    target:'',
    bgcolor:'',
  })

  function handleImc(event){
    event.preventDefault();
  
    let imc = Math.round(weight/(size*size))
    let slice;
    let target;
    let bgcolor;

    if ( imc < 18.5) {
      slice = 'maigreur'
      target = Math.round(18.5 * (size * size))
      bgcolor = '#e46416'

    } else if ( imc <= 25) {
      slice = 'normal'
      target = null
      bgcolor = '#4a5093'

    } else if ( imc < 30) {
      slice = 'surpoids'
      target = Math.round(25 * (size * size))
      bgcolor = '#a82a7a'

    } else if ( imc < 35) {
      slice = 'obésité'
      target = Math.round(25 * (size * size))
      bgcolor = '#2d68c7'

    } else if ( imc < 40) {
      slice = 'obésité massive'
      target = Math.round(25 * (size * size))
      bgcolor = '#ba9ae5'

    } else {
      slice = 'obésité sévère'
      target = Math.round(25 * (size * size))
      bgcolor = '#18cb8d'
    }

    setActiveItem({imc:imc, target:target, slice:slice, bgcolor:bgcolor})
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-weight-scale me-3"></i>
            Calcul IMC
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-4 pt-4">
            <h1 className="h3">Calculer votre IMC</h1>
            <form onSubmit={handleImc}>
              <input
                type="number"
                aria-label="Poids"
                name="poids"
                className="form-control"
                placeholder="Poids en kg."
                value={weight}
                onChange={(e) => setWeight(+e.target.value)}
              />

              <input
                type="number"
                step="0.01"
                aria-label="Taille"
                className="form-control mt-3"
                name="taille"
                placeholder="Taille en m."
                value={size}
                onChange={(e) => setSize(+e.target.value)}
              />

              <button type="submit" className="btn btn-success my-3 col-12">
                Valider
              </button>
            </form>
            { activeItem.imc && (
              <div style={{backgroundColor:activeItem.bgcolor}} className="alert  mt-4" role="alert">
                <h3>IMC :</h3>
                <p>{activeItem.slice}</p>
                {activeItem.target !== null && (
                <span>
                  <p>Vous devez être à {activeItem.target} kg</p>
                  <p>Vous devez {activeItem.target === 'maigreur' ? `gagner ${activeItem.target-weight}` : activeItem.target !== 'normal' ? `perdre ${weight-activeItem.target}` : ''} kg</p>
                </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; Seven Valley 2023
          </p>
        </div>
      </footer>
    </>
  );
}