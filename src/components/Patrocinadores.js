import React from "react";
const myArray = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F1.png?alt=media&token=b2d8cf70-b0aa-49ac-99ff-23629a856e03",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F2.png?alt=media&token=63f7d91b-47f4-4c1b-b397-9bd97b515a31",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F3.png?alt=media&token=51131127-503e-45ed-a4ac-4420eaf443c6",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F4.png?alt=media&token=6ded963e-f5ef-41b6-a1a7-7bd064ee54f7",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F5.png?alt=media&token=61b94360-9994-4e72-a693-f59f746a80c4",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F6.png?alt=media&token=8125c440-6b07-4f84-a1d2-ddb8a0ba04dc",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F7.png?alt=media&token=87574aca-14ed-4d7a-9220-8e39337f3694",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F8.png?alt=media&token=9888717c-8c0c-4eb0-a1fb-51d69266ea62",
  },
];
function Patrocinadores() {
  return (
    <div className="patrocinadores">
      <h4>Nuestros</h4>
      <h3>Patrocinadores</h3>

      <div className="patrocinadores-Contenedor">
        {myArray.map((item, index) => (
          <div key={index} className="patrocinadores-img">
            <img
              src={item.image}
              className="patrocinadoresImg"
              alt="conier 2021"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Patrocinadores;
