import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/CONGRESO.png";
import LogoCoiner from "../img/COINER.png";
import ListaComite from "../components/ListaComite";
import Patrocinadores from "../components/Patrocinadores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
//import ListaPonente from "../components/ListaPonente";

function home() {
  return (
    <>
      <section className="App-contenedor">
        <div className="contenedor">
          <div className="contenedor-imagen-izquierda">
            <img src={logo} className="App-logo left" alt="logo" />
          </div>

          <div className="contenedor-texto">
            <h1>Reserva la Fecha</h1>
            <h2>25, 26 y 27 de noviembre</h2>
            <br />
            <div className="contenedor-botones">
              <Link to="/registro">
                {" "}
                <button className="btn btn-primary"> REGISTRO</button>
              </Link>

              <Link to="/login">
                {" "}
                <button className="btn btn-primary"> ENTRAR</button>
              </Link>
            </div>
          </div>

          <div className="contenedor-imagen-derecha">
            <img src={LogoCoiner} className="App-logo right" alt="logo" />
          </div>
        </div>
      </section>
      <section className="comite-contenedor">
        <h2>¿Qué es COINER? ​</h2>
        <h3>
          Es una organización en la que convergen <br />
          asociaciones y grupos de pacientes
          <br /> con padecimientos de baja prevalencia.​
        </h3>
      </section>
      <section className="comite-contenedor">
        <h4>Conoce a nuestro </h4>
        <h2>COMITÉ CIENTÍFICO</h2>
        <br />
        <br />
        <ListaComite />
        <br />
        {/* <h4>Conoce a nuestros </h4>
        <h2>PROFESORES</h2>
        <br />
        <ListaPonente /> */}
        <Patrocinadores />
      </section>
      <footer>
        <h4>Síguenos en nuestras redes sociales</h4>
        <div className="redes">
          <a href="https://web.facebook.com/CoinerMexico">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/coinermx/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/70538539/admin/
"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <br />
        <h4>Escríbenos</h4>
        <a href="mailto:comunicacion@coiner.org">comunicacion@coiner.org</a>
      </footer>
      <a href="aviso_de_privacidad">Leer Aviso de Privacidad</a>
    </>
  );
}

export default home;
