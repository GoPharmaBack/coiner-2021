import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2FDra.%20Norma%20Candelaria%20Lo%CC%81pez%20Santiago.png?alt=media&token=76b2b8d4-e000-4dcf-b1af-461db8e4b14a";
function ProfesorM() {
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
              <p className="nombre">Dra. Norma López</p>
              <p className="titulo-ponente">Hematología pediátrica </p>
              <p className="trayectoria">
                Médico Cirujano con especialidad en Pediatría y subespecialidad
                en Hematología pediátrica. Actualmente está certificada por el
                Consejo Mexicano de Certificación en Pediatría A.C. y el Consejo
                Mexicano de Certificación en Hematología A.C. Es encargada del
                Servicio de Hematología en el Instituto Nacional de Pediatría y
                profesora adjunta del curso de Especialidad en Hematología
                Pediátrica de la Universidad Nacional Autónoma de México, es
                secretaria técnica del Comité de Investigación en el Instituto
                Nacional de Pediatría y coordinadora del Sub-Comité Académico de
                Hematología en la Unidad de Posgrado de la Facultad de Medicina
                de la Universidad Nacional Autónoma de México.
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
          <h2 className="nombre-ponente">Dra. Norma López</h2>
          <p className="titulo-ponente">Hematología pediátrica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Norma López</h2>
          <p className="titulo-ponente">Hematología pediátrica </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProfesorM;
