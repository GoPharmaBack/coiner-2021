import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2F18DraLilianReyes.png?alt=media&token=b2d86c62-2a81-462e-a4f4-c168773fdcc3";
function ProfesorR() {
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
              <p className="nombre">Dra. Lilian Reyes </p>
              <p className="titulo-ponente">Nefrología pediátrica </p>
              <p className="trayectoria">
                Egresada de la Benemérita Universidad Autónoma de Puebla con
                especialidad en pediatría médica y nefrología pediátrica,
                también cuenta con estudios en Salud Materno Fetal Actualmente
                es médico adscrito de nefrología pediátrica en el Instituto
                Nacional de Pediatría y es socio activo de asociaciones como:
                Instituto Mexicano de Investigaciones Nefrológicas (IMIN),
                Fundación para la Acidosis Tubular Renal Infantil Mexicana, AC.,
                Colegio Médico del Hospital Ángeles México A.C., Asociación
                Latinoamericana de Nefrología Pediátrica (ALANEPE) y la
                International Pediatric Nephrology (IPNA).
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
          <h2 className="nombre-ponente">Dra. Lilian Reyes </h2>
          <p className="titulo-ponente">Nefrología pediátrica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Lilian Reyes </h2>
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

export default ProfesorR;
