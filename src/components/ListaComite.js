import React from "react";
import ComiteA from "./comite/ComiteA";
import ComiteB from "./comite/ComiteB";
import ComiteC from "./comite/ComiteC";
import ComiteD from "./comite/ComiteD";
import ComiteE from "./comite/ComiteE";
function ListaComite() {
  return (
    <div className="comite">
      <ComiteA />
      <ComiteB />
      <ComiteC />
      <ComiteD />
      <ComiteE />
      <ComiteA />
    </div>
  );
}

export default ListaComite;
