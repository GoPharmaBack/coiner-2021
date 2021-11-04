import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/11_DraCristina_Sesman.png?alt=media&token=68ddab04-7168-44ce-97b7-1afd3e49e598";
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
              <p className="nombre">Dra. Cristina Sesman </p>
              <p className="titulo-ponente">Pediatría </p>
              <p className="trayectoria">
                Cuenta con especialidad en pediatría por el Hospital Regional
                Lic. Adolfo López Mateos. Actualmente es médico en el Centro
                Regional de Alta Especialidad de Chiapas y repsonsable de la
                Clínica de Enfermedades Lisosomales del Hospital de
                Especialidades Pediátricas. Ha sido ponente en diversos cursos y
                conferencias de Enfermedades Lisosomales y profesor de pregrado.
                Se encuentra cursando los diplomados de Derecho Sanitario por la
                Universidad Anáhuac y el “Diplomado de Regulación y Riesgos
                Sanitarios”, de la Escuela de Salud Pública de México (ESPM) del
                Instituto Nacional de Salud Pública (INSP)
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
          src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/11_DraCristina_Sesman.png?alt=media&token=68ddab04-7168-44ce-97b7-1afd3e49e598"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Cristina Sesman </h2>
          <p className="titulo-ponente">Pediatría </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Cristina Sesman </h2>
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
