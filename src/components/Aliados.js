import React from "react";
const myArray = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2FMPS_JAJAX_LOGO.png?alt=media&token=65eaa1c6-cef8-43d2-a557-de2c35c79589",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2FLogo_NEM.png?alt=media&token=ea434608-8e0b-47eb-a046-8f08eac13841",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2FOMER_LOGO%402x.png?alt=media&token=8b20c418-05cd-421f-b398-6626ec6b63bf",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2FSEER_LOGO_AZUL%402x.png?alt=media&token=5bea16bf-9e9b-4bde-9f07-2260debc0579",
    link: "https://seerlatam.org/",
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
            <a href={item.link}>
              <img src={item.image} className="AliadosImg" alt="aliados" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aliados;
