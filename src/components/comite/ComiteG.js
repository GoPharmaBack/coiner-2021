import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/7_DraJuana_Navarrete.png?alt=media&token=bc0b252b-0515-40d3-b132-fa1446259cf0";
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
              <p className="nombre">Dra. Juana Navarrete </p>
              <p className="titulo-ponente">Genética Médica </p>
              <p className="trayectoria">
                Médico Genetista egresada de la UNAM. Actualmente Jefa del
                Servicio de Genética del Hospital Central Sur de Alta
                Especialidad PEMEX Profesor titular de Genética Médica de la
                carrera de Médico Cirujano, Facultad de Medicina UNAM Miembro de
                la Asociación Mexicana de Genética Humana y del Consejo Mexicano
                de Especialistas en Genética Humana. Miembro Fundador del Grupo
                de Estudios al Nacimiento.
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
          src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/7_DraJuana_Navarrete.png?alt=media&token=bc0b252b-0515-40d3-b132-fa1446259cf0"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Juana Navarrete </h2>
          <p className="titulo-ponente">Nefrologia Pediátrica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Juana Navarrete </h2>
          <p className="titulo-ponente">Nefrologia Pediátrica </p>
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
