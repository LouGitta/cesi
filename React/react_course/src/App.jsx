export default function App() {
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
            <form method="post">
              <input
                aria-label="Poids"
                name="poids"
                className="form-control"
                placeholder="Poids en kg."
              />

              <input
                aria-label="Taille"
                className="form-control mt-3"
                name="taille"
                placeholder="taille en m."
              />

              <button type="submit" className="btn btn-success my-3 col-12">
                <i className="fa-solid fa-weight-scale"></i>
              </button>
            </form>
            {
              <div className="alert  mt-4" role="alert">
                <h3>IMC : </h3>
                <p></p>
                <span>
                  <p>objectif </p>
                  <p>nb kilo </p>
                </span>
              </div>
            }
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