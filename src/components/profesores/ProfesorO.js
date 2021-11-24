import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2FLic.%20Sara%20Guillen.png?alt=media&token=93fc29e2-9b85-4a41-bc3b-5f4a6b83fa78";
function ProfesorO() {
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
              <p className="nombre">Lic. Sara Guillén </p>
              <p className="titulo-ponente">Nutrición clínica pediátrica </p>
              <p className="trayectoria">
                Maestra en Nutrición especialista en errores innatos del
                metabolismo y nutrición pediátrica adscrita al Laboratorio de
                errores innatos del metabolismo y tamiz del Instituto Nacional
                de Pediatría como Investigador en ciencias médicas B. Docente en
                diversas universidades, consultora privada, ponente y promotora
                de los errores innatos del metabolismo tanto en foros nacionales
                como internacionales. Más de 12 años de experiencia en el
                tratamiento y manejo nutricional de pacientes con errores
                innatos del metabolismo, así como diversas publicaciones
                científicas que incluyen capítulos de libros y artículos
                científicos en revistas nacionales e internacionales.
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
          <h2 className="nombre-ponente">Lic. Sara Guillén </h2>
          <p className="titulo-ponente">Nutrición clínica pediátrica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Lic. Sara Guillén </h2>
          <p className="titulo-ponente">Nutrición clínica pediátrica </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProfesorO;
