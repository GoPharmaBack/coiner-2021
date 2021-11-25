import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2FDr.%20Elias%20Garci%CC%81a.png?alt=media&token=c2b38f74-ee26-4d3f-a2e7-41d825146a30";
function ProfesorG() {
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
              <p className="nombre">Dr. José Elías García Ortiz </p>
              <p className="titulo-ponente">Genética médica </p>
              <p className="trayectoria">
                Especialista en genética clínica con doctorado en genética
                humana. Encargado de la Dirección de Educación e Investigación
                en Salud de la UMAE Hospital de Gineco-Obstetricia Centro Médico
                de Occidente del IMSS en Guadalajara. investigador tipo A y jefe
                de laboratorio de diagnóstico bioquímico de enfermedades
                lisosomales de la división de genética del Centro de
                lnvestigaci6n Biomédica de Occidente (CIBO), IMSS. Presidente de
                la Asociación Mexicana de Genética Humana (2020-2021) Autor de
                más de 50 publicaciones en revistas indexadas.
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
          <h2 className="nombre-ponente">Dr. José Elías García Ortiz </h2>
          <p className="titulo-ponente">Genética médica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. José Elías García Ortiz </h2>
          <p className="titulo-ponente">Genética médica </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ProfesorG;
