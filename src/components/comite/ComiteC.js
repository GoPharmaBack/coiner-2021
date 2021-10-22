import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/3_DraMagdalena_Ceron.png?alt=media&token=0d8e7340-ec8d-4d7f-92b9-87c00a58083d";
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
              <p className="nombre">Dra. Magdalena Cerón </p>
              <p className="titulo-ponente">Pediatría </p>
              <p className="trayectoria">
                Cuenta con especialidad en pediatría y medicina interna
                pediatrica por el Hospital Infantil de México Federico Gómez.
                Actualmente es jefa de servicio de la Clínica de Enfermedades
                Lisosomales Hospital Infantil de México y Coordinadora de la
                Consulta Externa de Pediatría Hospital Infantil de México
                Federico Gómez. Ha sido miembro activo de distintas asociaciones
                como la Academia Mexicana de Pediatría, Consejo Mexicano de
                Certificación en Pediatría y la Asociación de Médicos del
                Hospital Infantil de México. Es profesor titular de pediatría en
                pregrado de la UNAM y tutor del servicio social del programa de
                vinculación de la UNAM. Cuenta con publicaciones nacionales e
                internacionales, ha dirigido tesis de pediatría y urgencias
                pediátricas.
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
          src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/3_DraMagdalena_Ceron.png?alt=media&token=0d8e7340-ec8d-4d7f-92b9-87c00a58083d"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Magdalena Cerón </h2>
          <p className="titulo-ponente">Genética Médica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Magdalena Cerón </h2>
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
