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
              src="https://player.vimeo.com/video/648435689?h=6e97d5380c&badge=0&autopause=0&player_id=0&app_id=58479"
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
              title="Loop_Logos_v2"
            />
          </div>
        </div>

        {/* chat */}
        <div className="chat">
          <iframe
            title="chat-coiner"
            src="https://minnit.chat/coiner?embed&&nickname="
            style={{ border: "none", width: "90%", height: 450 }}
            allowTransparency="true"
          />
        </div>
      </div>
      <a href="aviso_de_privacidad">Leer Aviso de Privacidad</a>
    </div>
  );
}

export default Transmition;
