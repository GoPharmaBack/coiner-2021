import React from "react";
const myArray = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2FOMER_LOGO%402x.png?alt=media&token=8b20c418-05cd-421f-b398-6626ec6b63bf",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2FLOGO_SEER_BLACK.png?alt=media&token=e2ccdead-ae00-4170-bffc-30261a483bbe",
  },
];
function Aliados() {
  return (
    <div className="patrocinadores">
      <h4>Nuestros</h4>
      <h3>Aliados</h3>

      <div className="patrocinadores-Contenedor">
        {myArray.map((item, index) => (
          <div key={index} className="Aliados-img">
            <img src={item.image} className="AliadosImg" alt="aliados" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aliados;
