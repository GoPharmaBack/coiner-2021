import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2F1DraBelmont.jpeg?alt=media&token=9172fb71-8bde-4fad-91dc-59ca70d39393";
function ProfesorE() {
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
              src={ImgProfesor}
              className="imagen-modal"
              alt="imagen-comite a"
            />
            <div className="texto">
              <p className="nombre">Dra. Claudia Cossio </p>
              <p className="titulo-ponente">Pediatría Médica</p>
              <p className="trayectoria">
                Se formó como médico cirujano en la Universidad Autónoma de
                Puebla, cuenta con la especialidad en pediatría médica por el
                Consejo Mexicano de Certificación en Pediatría. Actualmente es
                Coordinadora de la Clínica de enfermedades Lisosomales y
                profesora tutora de residencias médicas en pediatría en el HNP
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
        <img src={ImgProfesor} alt="comite" />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Claudia Cossio </h2>
          <p className="titulo-ponente">Pediatría Médica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Claudia Cossio </h2>
          <p className="titulo-ponente">Pediatría Médica </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProfesorE;
