import React from "react";
import Cookies from "universal-cookie";
import logo from "../img/CONGRESO.png";
function Transmition() {
  const cookies = new Cookies();
  function logout() {
    cookies.remove("message");
    cookies.remove("rooms");
    window.location.href = "./";
    localStorage.clear();
    localStorage.setItem("lang", "es");

    console.log("borrar");
  }
  return (
    <div className="Transmision">
      <br />
      <img src={logo} className="logo-trans" alt="logo" />
      <button className=" btn-primary btn-transmision" onClick={logout}>
        Cerrar sesión
      </button>
      <div className="contenedor-transmision">
        {/* video */}
        <div className="video">
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              title="coiner3"
              src="https://vimeo.com/event/1577072/embed"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />

            {/* <iframe
              title="transmision"
              src="https://vimeo.com/event/1577072/embed/8063574f36"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            /> */}
          </div>
          <br />
        </div>

        {/* chat */}
        <div className="chat">
          <iframe
            title="chat-coiner"
            src="https://minnit.chat/coiner?embed&&nickname="
            style={{ border: "none", width: "90%", height: 550 }}
            allowTransparency="true"
          />
        </div>
      </div>
      <a href="aviso_de_privacidad">Leer Aviso de Privacidad</a>
    </div>
  );
}

export default Transmition;
