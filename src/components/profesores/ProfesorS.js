import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2F1DraBelmont.jpeg?alt=media&token=9172fb71-8bde-4fad-91dc-59ca70d39393";
function ProfesorS() {
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
              <p className="nombre">Dr. José Carlos Romo </p>
              <p className="titulo-ponente">Nefrología pediátrica </p>
              <p className="trayectoria">
                Nefrólogo pediatra egresado del Hospital Infantil de México
                Federico, Gómez, maestría en bioética por la Universidad
                Panamericana, Curso de Alta Especialidad en Terapias de
                Sustitución Renal Lentas Continuas Children’s Mercy Hospital
                Kansas City, jefe del Departamento de Nefrología Pediátrica.
                Hospital Infantil de México Federico Gómez.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <React.Fragment>
      {" "}
      <div className="comite-el" onClick={() => setModalShow(true)}>
        <img src={ImgProfesor} alt="comite" />
        <div className="info">
          <h2 className="nombre-ponente">Dr. José Carlos Romo </h2>
          <p className="titulo-ponente">Nefrología pediátrica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. José Carlos Romo </h2>
          <p className="titulo-ponente">Nefrología pediátrica </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ProfesorS;
