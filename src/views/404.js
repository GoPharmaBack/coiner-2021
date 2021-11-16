import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="Error">
      <div className="contenedor">
        <h1>404</h1>
        <h2> Página no encontrada</h2>
        <Link to="/">Regresar al inicio</Link>
      </div>
    </section>
  );
}

export default NotFound;
