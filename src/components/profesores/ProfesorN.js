import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2FDr.%20Jaime%20Lopez.png?alt=media&token=366f867e-1139-42f9-813a-3b43f903ab58";
function ProfesorN() {
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
              <p className="nombre">Dr. Jaime López Valdez </p>
              <p className="titulo-ponente">Genética Médica </p>
              <p className="trayectoria">
                Egresado de la universidad Autónoma de Aguascalientes, realizó
                la especialidad en Genética Médica en el Hospital General de
                México y la subespecialidad en Medicina Perinatal en el
                Instituto Nacional de Perinatología, cuenta con estudios en
                Investigación genómica, errores innatos del metabolismo y buenas
                prácticas clínicas. Es experto en genética médica, diagnóstico
                prenatal, enfermedades metabólicas y en laboratorio de
                citogenética y biología molecular. Ha dado presentaciones,
                conferencias y publicaciones acerca de genética médica,
                citogenética, enfermedades metabólicas y bioética en congresos y
                revistas nacionales e internacionales. Ha sido investigador
                principal para estudio en pacientes con enfermedades
                lisosomales. Y pertenece a asociaciones médicas como la
                Asociación Mexicana de Genética Humana, Sociedad Latinoamericana
                de Errores Innatos del Metabolismo y Pesquisa Neonatal y Latin
                American Society of Inmunodeficiencies.
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
          <h2 className="nombre-ponente">Dr. Jaime López Valdez </h2>
          <p className="titulo-ponente">Genética Médica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Jaime López Valdez </h2>
          <p className="titulo-ponente">Genética Médica </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ProfesorN;
