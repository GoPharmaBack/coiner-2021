import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/8_DrJesu%CC%81s_Navarro.png?alt=media&token=c7fe9b9e-78d1-4571-b6d9-a562c9931be8";
function Comite() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        className="text-light"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="contenedor-modal d-flex">
            <Button className="boton-cerrar" onClick={props.onHide}>
              x
            </Button>
            <img
              src={ImgPonente}
              className="imagen-modal"
              alt="imagen-comite a"
            />
            <div className="texto">
              <p className="nombre">Dr. Jesús Navarro </p>
              <p className="titulo-ponente">Presidente OMER y JAJAX </p>
              <p className="trayectoria">
                El Dr. Navarro es fundador y actual Vice-Presidente de la
                Alianza Iberoamericana de las Enfermedades Raras o Poco
                Frecuentes (ALIBER), Fundador y Presidente de la Organización
                Mexicana de Enfermedades Raras (OMER) y de MPS JAJAX AC. Miembro
                del grupo de expertos de enfermedades raras para Rare Diseases
                International.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <>
      {" "}
      <div className="comite-el" onClick={() => setModalShow(true)}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/8_DrJesu%CC%81s_Navarro.png?alt=media&token=c7fe9b9e-78d1-4571-b6d9-a562c9931be8"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dr. Jesús Navarro </h2>
          <p className="titulo-ponente">Presidente OMER y JAJAX </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Jesús Navarro </h2>
          <p className="titulo-ponente">Nefrología Pediátrica </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Comite;
