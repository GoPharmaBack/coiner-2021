import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2F1DraBelmont.jpeg?alt=media&token=9172fb71-8bde-4fad-91dc-59ca70d39393";
function ProfesorW() {
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
              <p className="nombre">Dra. Marcela Vela </p>
              <p className="titulo-ponente">Pediatría</p>
              <p className="trayectoria">
                Actualmente es jefa del Laboratorio de Errores Innatos del
                Metabolismo y Tamiz en el Instituto Nacional de Pediatría
                Pediatra certificada, investigadora del Instituto Nacional de en
                el área de enfermedades metabólicas hereditarias, miembro del
                Sistema Nacional de Investigadores del Consejo Nacional de
                Ciencia y Tecnología de México (CONACYT). Miembro de la Academia
                Mexicana de Pediatría, con 29 años de experiencia en errores
                innatos del metabolismo, defectos metabólicos al nacimiento,
                tamiz neonatal, metabolómica y estudio integral de las
                enfermedades raras, con énfasis en los trastornos de los
                aminoácidos, acidemias orgánicas y defectos de la oxidación de
                ácidos grasos. Experta en prevención de la discapacidad
                secundaria a defectos metabólicos al nacimiento. Autora de más
                de 150 publicaciones científicas nacionales e internacionales y
                de 15 libros/capítulos. Con más de 500 participaciones en
                conferencias y congresos nacionales e internacionales.
                Presidenta de la Sociedad Mexicana de Errores Innatos del
                Metabolismo y Tamiz, A.C. Expresidente de la Sociedad
                Latinoamericana de Errores Innatos del Metabolismo y Pesquisa
                Neonatal. (Latin American Society of Inborn Errors of Metabolism
                and Neonatal Screening), miembro del consejo directivo como
                representante de la región de Lationamérica hasta 2019 de la
                International Society for Neonatal Screening (ISNS); miembro de
                las asociaciones Society for Inherited Metabolic Disorders
                (SIMD), Sociedad Mexicana de Errores Innatos del Metabolismo y
                Tamiz A.C., Asociación Médica del Instituto Nacional de
                Pediatría y la Academia Mexicana de Pediatría
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
          <h2 className="nombre-ponente">Dra. Marcela Vela </h2>
          <p className="titulo-ponente">Pediatría</p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Marcela Vela </h2>
          <p className="titulo-ponente">Pediatría</p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProfesorW;
