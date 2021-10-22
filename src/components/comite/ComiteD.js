import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/4_DrDavid_Cervantes.png?alt=media&token=7494f2e6-adb2-49c5-b048-9023b8700562";
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
              <p className="nombre">Dr. David Cervantes</p>
              <p className="titulo-ponente">Genética Médica </p>
              <p className="trayectoria">
                Se formó como médico cirujano en la Universidad La Salle y
                realizó la especialidad de Genética Médica en el Instituto
                Nacional de Pediatría. Es profesor titular de genética y
                genómica en la Universidad La Salle y profesor de genética en la
                UNAM.
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
          src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/4_DrDavid_Cervantes.png?alt=media&token=7494f2e6-adb2-49c5-b048-9023b8700562"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dr. David Cervantes</h2>
          <p className="titulo-ponente">Genética Médica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. David Cervantes</h2>
          <p className="titulo-ponente">Genética Médica </p>
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
