import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2FDr.%20Rodrigo%20Matsui.png?alt=media&token=ccda09fa-eb61-49cb-b7e0-4019efed9cb5";
function ProfesorQ() {
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
              <p className="nombre">Dr. Rodrigo Matsui </p>
              <p className="titulo-ponente">Oftalmología </p>
              <p className="trayectoria">
                Egresado de la Facultad de Medicina de la Universidad Nacional
                Autónoma de México (UNAM). Realizó la especialidad de
                Oftalmología y Retina Médico-Quirúrgica en el Instituto de
                Oftalmología Fundación Conde de Valenciana y una una estancia de
                investigación en la Universidad de Heidelberg, Alemania en el
                estudio de modelos animales de degeneración retiniana y
                patología vascular. Realizó estudios de posgrado en la
                Universidad de Pensilvania en el área de Enfermedades
                Heredodegenerativas de la Retina bajo la tutoría del Dr. Samuel
                Jacobson. El Dr. Matsui ha sido acreedor a premios en el área de
                Investigación de las Enfermedades Genéticas de la Retina, el
                primero de ellos fue otorgado por la Sociedad Mexicana de
                Oftalmología por su estudio en pacientes con enfermedad de
                Bardet-Biedl (2012). Recibió el premio al mejor trabajo de
                investigación en el área de la Degeneración Macular Relacionada
                a la Edad por parte de la Asociación Mexicana de Retina (2014).
                Recibió la beca CONACYT para el estudio de posgrado en el
                extranjero (2015) y al finalizar su estancia en la Universidad
                de Pensilvania fue acreedor al premio “Elizabeth Anderson Career
                Development Award” (2016) por parte de la Foundation Fighting
                Blindness en EUA, siendo así el primer oftalmólogo
                latinoamericano en recibir este galardón por parte de la
                institución más importante a nivel mundial que apoya la
                investigación en el área de las Enfermedades Genéticas de la
                Retina. Actualmente es profesor clínico-quirúrgico de
                oftalmología del departamento de retina del Instituto de
                Oftalmología Fundación Conde de Valenciana y el jefe de la
                Clínica de Enfermedades Genéticas de la Retina. Su principal
                investigación es en el área de las Enfermedades Genéticas de la
                Retina, Retinopatía Diabética y Degeneración Macular Relacionada
                a la Edad, contando con distintas publicaciones en revistas
                nacionales e internacionales.
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
          <h2 className="nombre-ponente">Dr. Rodrigo Matsui </h2>
          <p className="titulo-ponente">Oftalmología </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Rodrigo Matsui </h2>
          <p className="titulo-ponente">Oftalmología </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ProfesorQ;
