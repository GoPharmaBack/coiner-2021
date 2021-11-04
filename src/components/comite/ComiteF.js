import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/6_DrRonny_Kershenovich.png?alt=media&token=ce028cb4-afe1-4b6a-87bd-2943a3ec25dc";
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
              <p className="nombre">Dr. Ronny Kershenovich </p>
              <p className="titulo-ponente">Genética Médica </p>
              <p className="trayectoria">
                Médico genetista desde el 2003 con especial interés en
                dismofología clínica, enfermedades del tejido conectivo y
                porfirias. Actualmente es Subdirector de Investigación Médica en
                el Instituto Nacional de Medicina Genómica, médico genetista en
                Centro Médico ABC Campus Santa Fé y profesor de pregrado de
                genética clínica en el Instituto Tecnológico y de Estudios
                Superiores de Monterrey. Miembro activo de diversas asociaciones
                nacionales e internacionales como: Asociación Mexicana de
                Genética Humana, Capitulo de Genética del Colegio Mexicano de
                Ginecología y Obstetricia, American College of Medical Genetics
                and Genomics, American Society of Human Genetics, European
                Society of Human Genetics. Miembro de la Asociación Médica y del
                Staff del Centro Médico ABC, Sociedad Mexicana para Porifira,
                Unique y The Ehlers-Danlos Society.
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
          src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/6_DrRonny_Kershenovich.png?alt=media&token=ce028cb4-afe1-4b6a-87bd-2943a3ec25dc"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dr. Ronny Kershenovich </h2>
          <p className="titulo-ponente">Genética Médica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Ronny Kershenovich </h2>
          <p className="titulo-ponente">Nefrología Pediátrica </p>
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
