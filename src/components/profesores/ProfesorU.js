import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2FKika_Shabot.png?alt=media&token=90af6443-4f9a-44ba-bc41-d5c4b0e24e62";
function ProfesorU() {
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
              <p className="nombre">Kika Shabot </p>
              <p className="titulo-ponente">Relaciones internacionales </p>
              <p className="trayectoria">
                Lic. En Relaciones Internacionales y Ciencias Políticas por la
                “Universidad Iberoamericana”. Lic. En Kinesiología y Terapia en
                Movimiento por la “Universidad de Berkeley” en California.
                Master en Terapia de Movimiento para enfermedades degenerativas
                por por la “Universidad de Berkeley” en California. Master en
                Técnicas de respiración para el manejo del estrés por la
                “Universidad de Boston” en Massachusetts. Master en Mindfulness:
                "Atencion Plena", Universidad de California en Los Angeles, Los
                Angeles, California Fundadora de la Sociedad Mexicana para
                Porfiria A.C.
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
          <h2 className="nombre-ponente">Kika Shabot </h2>
          <p className="titulo-ponente">Relaciones internacionales </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Kika Shabot </h2>
          <p className="titulo-ponente">Relaciones internacionales </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ProfesorU;
