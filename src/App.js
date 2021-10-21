import logo from "./img/CONGRESO.png";
import LogoCoiner from "./img/COINER.png";
import ListaComite from "./components/ListaComite";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import "./scss/index.scss";

function App() {
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            number: {
              value: 60,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />

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

      <section className="comite-contenedor">
        <h4>Nuestro</h4>
        <h2>COMITÉ CIENTÍFICO</h2>
        <br />
        <ListaComite />
      </section>
      <div className="footer">
      <small>
        Copyright © 2021<i> CONGRESO COINER 2021, All right reserved</i>.
      </small>
      </div>
    </div>
  );
}

export default App;
