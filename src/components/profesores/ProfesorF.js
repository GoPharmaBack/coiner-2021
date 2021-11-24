import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2F1DraBelmont.jpeg?alt=media&token=9172fb71-8bde-4fad-91dc-59ca70d39393";
function ProfesorF() {
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
              <p className="nombre">Dr. José Antonio de la Peña Celaya </p>
              <p className="titulo-ponente">Hematología </p>
              <p className="trayectoria">
                Hematólogo egresado del CMN 20 de noviembre ISSSTE, actualmente
                médico adscrito al servicio de hematología del CMN 20 de
                noviembre ISSSTE. Cuenta con más de 10 publicaciones nacionales
                e internacionales y cuenta con amplia experiencia en el manejo
                de la HPN.
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
          <h2 className="nombre-ponente">
            Dr. José Antonio de la Peña Celaya{" "}
          </h2>
          <p className="titulo-ponente">Hematología </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">
            Dr. José Antonio de la Peña Celaya{" "}
          </h2>
          <p className="titulo-ponente">Hematología </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProfesorF;
