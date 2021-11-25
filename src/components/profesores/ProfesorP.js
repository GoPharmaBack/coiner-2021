import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2FDr.%20Bruno%20Martinez%20fondo%20blanco.png?alt=media&token=6e524507-0942-446d-b041-4c332a3f8520";
function ProfesorP() {
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
              <p className="nombre">Dr. Bruno Martínez </p>
              <p className="titulo-ponente">Cirugía pediátrica colorrectal </p>
              <p className="trayectoria">
                Research Fellow del Cincinnati Children's Colorectal Center y
                Universidad de Cincinnati, research Fellow en Cirugía Pediátrica
                Global, King's College, UK Diplomado en Salud Pública, diplomado
                en Farmacología Clínica y maestrante en Gestión de Servicios de
                Salud Actualmente es encargado del Servicio de Cirugía
                Pediátrica, Hospital Pediátrico Moctezuma, Secretaría de Salud
                de la Ciudad de México y director médico, Fundación Momentum
                para Enfermedades Colorrectales Congénitas, AC.
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
          <h2 className="nombre-ponente">Dr. Bruno Martínez </h2>
          <p className="titulo-ponente">Cirugía pediátrica colorrectal </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Bruno Martínez </h2>
          <p className="titulo-ponente">Cirugía pediátrica colorrectal </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ProfesorP;
