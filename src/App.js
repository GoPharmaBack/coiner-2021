import logo from "./img/CONGRESO.png";
import LogoCoiner from "./img/COINER.png";
import ListaComite from "./components/ListaComite";
import "bootstrap/dist/css/bootstrap.min.css";

import "./scss/index.scss";

function App() {
  return (
    <div className="App">
      <section className="App-contenedor">
        <div className="contenedor">
          <div className="contenedor-imagen-izquierda">
            <img src={logo} className="App-logo left" alt="logo" />
          </div>

          <div className="contenedor-texto">
            <h1>Reserva la Fecha</h1>
            <h2>25,26 y 27 de noviembre</h2>
          </div>

          <div className="contenedor-imagen-derecha">
            <img src={LogoCoiner} className="App-logo right" alt="logo" />
          </div>
        </div>
      </section>

      <section className="comite">
        <ListaComite />
      </section>
    </div>
  );
}

export default App;
