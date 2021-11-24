import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2F1DraBelmont.jpeg?alt=media&token=9172fb71-8bde-4fad-91dc-59ca70d39393";
function ProfesorH() {
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
              <p className="nombre">Dr. Ubier Gómez </p>
              <p className="titulo-ponente">Toxicólogo Clínico </p>
              <p className="trayectoria">
                Médico y Toxicólogo Clínico de la Universidad de Antiloquia de
                Medellin, con estudios en farmacoeconomía, gestión en salud,
                farmacología clínica y farmacoepidemiología. Profesor de
                farmacología y toxicología de la Universidad de Antiloquia.
                Vicepresidente de la Asociación Colombiana de toxicología
                clínica. Ha sido galardonado con las distinciones: “Mejor
                relación médico paciente”, “Excelencia docente” y “Egresado
                honorífico" de la Universidad de Antiloquia. Cuenta con 96
                publicaciones en libros y revistas nacionales e internacionales.
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
          <h2 className="nombre-ponente">Dr. Ubier Gómez </h2>
          <p className="titulo-ponente">Toxicólogo Clínico </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Ubier Gómez </h2>
          <p className="titulo-ponente">Toxicólogo Clínico </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProfesorH;
