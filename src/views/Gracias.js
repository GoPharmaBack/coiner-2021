import React from "react";

function Gracias() {
  return (
    <section className="gracias">
      <div className="contendor">
        <h1>Gracias</h1>
        <h2>Registro exitoso</h2>
        <p>
          La información de su perfil se ha actualizado. <br /> una copia se
          enviara a su correo con la información que nos proporcionó...{" "}
        </p>
        <br />
        <a href="/login">
          {" "}
          <button className="btn btn-primary">Acceda a la transmision</button>
        </a>
        <br />
        Use su correo para ingresar
      </div>
    </section>
  );
}

export default Gracias;
