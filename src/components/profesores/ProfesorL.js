import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2F12DraLilianaFernandez.jpeg?alt=media&token=28a5aad0-6d17-4694-985f-1bc3426a86f66";
function ProfesorL() {
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
              <p className="nombre">Dra. Liliana Fernández</p>
              <p className="titulo-ponente">Genética Perinatal </p>
              <p className="trayectoria">
                Egresó como Médico Cirujano de la Universidad Anáhuac para
                posteriormente realizar estudios de Especialidad en Genética
                Médica en la Universidad Nacional Autónoma de México (UNAM) y
                Alta Especialidad en Genética Perinatal en el Instituto Nacional
                de Perinatología (INPER). Maestra en Bioética y Derecho. Es
                experta en Genética Médica, Genética Perinatal y Diagnóstico
                Prenatal, Enfermedades genéticas y metabólicas. Es socio de la
                Asociación Mexicana de Genética Humana y del Colegio Mexicano de
                Especialistas en Ginecología y Obstetricia. Pertenece al comité
                de ética en investigación del INP. Actualmente es Médico
                Especialista Adscrito al Laboratorio de Biología Molecular y
                Consulta de Genética del Instituto Nacional de Pediatría y está
                certificada por el Consejo Mexicano de Genética. Asimismo, es
                Profesora Titular del curso de Biología Del Desarrollo en la
                Universidad Anáhuac. Socia Fundadora de Fundación Momentum A.C.
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
          <h2 className="nombre-ponente">Dra. Liliana Fernández</h2>
          <p className="titulo-ponente">Genética Perinatal </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Liliana Fernández</h2>
          <p className="titulo-ponente">Genética Perinatal </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ProfesorL;
