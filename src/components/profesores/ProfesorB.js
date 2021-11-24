import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2F1DraBelmont.jpeg?alt=media&token=9172fb71-8bde-4fad-91dc-59ca70d39393";
function ProfesorB() {
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
              <p className="nombre">Dr. Juan Carlos Bustamante </p>
              <p className="titulo-ponente">
                Alergia e inmunología clínica pediátrica{" "}
              </p>
              <p className="trayectoria">
                Médico Cirujano por la Universidad Anáhuac Norte, con estudios
                de especialidad en Pediatría, sub-especialidad en Alergia e
                Inmunología Clínica Pediátrica y alta especialidad en
                Inmunodeficiencias Primarias en el Instituto Nacional de
                Pediatría/UNAM. Cursó estudios de maestría en terapia celular y
                terapia génica en el University College London y el Great Street
                Ormond Hospital en Londres, Inglaterra. Actualmente es
                Investigador en Ciencias Médicas adscrito al Laboratorio de
                Investigación en Inmunodeficiencias Primarias y al Servicio de
                Inmunología Clínica del Instituto Nacional de Pediatría.
                Profesor titular de Inmunología Clínica en Universidad Anáhuac,
                Campus Norte. Es miembro del SNI (Candidato), y miembro activo
                de CIS, LASID, ESID, COMPEDIA y del ASGCT. Certificado por los
                Consejos Nacionales de Pediatría y de Alergia e Inmunología
                Clínica. Participa en los Comités Científicos de FUMENI y de la
                Iniciativa “Nadie es Menos”.
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
          <h2 className="nombre-ponente">Dr. Juan Carlos Bustamante </h2>
          <p className="titulo-ponente">
            Alergia e inmunología clínica pediátrica{" "}
          </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Juan Carlos Bustamante </h2>
          <p className="titulo-ponente">
            Alergia e inmunología clínica pediátrica{" "}
          </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProfesorB;
