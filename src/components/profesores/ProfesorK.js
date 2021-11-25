import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2FDrAlbertoFernandez.png?alt=media&token=86cda970-879e-4d43-82b2-0e34c1a0c8d7";
function ProfesorK() {
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
              <p className="nombre">Dr. Alberto Fernández</p>
              <p className="titulo-ponente">Neurología infantil </p>
              <p className="trayectoria">
                Jefe del Servicio de Neurología Infantil y Jefe Asociado del
                Servicio de Neurología del Hospital Universitario Quirónsalud de
                Madrid. Responsable de la Sección de Neurogenética. Licenciado
                en Medicina y Cirugía por la Universidad Autónoma de Madrid,
                especializado en Pediatría y sus áreas específicas en el
                Hospital La Paz de Madrid. Especialista en Neurología Infantil
                con acreditación por la SENEP. Máster en Psicología por la
                Universidad Autónoma de Barcelona. Doctor en Medicina por la
                Universidad Europea de Madrid, con calificación de excelente-
                Cum Laude; premio extraordinario de la universidad. Es Profesor
                Asociado de la Facultad de Medicina de la Universidad Europea de
                Madrid y Colaborador Honorífico del departamento de Biología
                Celular, Facultad de Ciencias Biológicas de la Universidad
                Complutense de Madrid, dedicado a la Genética Aplicada. Profesor
                del Máster en TDAH de la Universidad de Vic y profesor del
                Máster en Psiquiatría del niño y adolescente (Neuroimagen y
                Genética) por la Universidad de Barcelona. Codirector del Máster
                en Neurología Pediátrica y Neurodesarrollo por la Universidad
                CEU de Madrid. Es autor de 13 libros, 150 artículos y 40
                capítulos de libros relacionados con su especialidad. Ha sido
                invitado a dar numerosas conferencias en el ámbito de la
                neurología pediátrica, particularmente relacionados con los
                trastornos del neurodesarrollo y su origen. Ha participado en
                diferentes ensayos clínicos relacionados con los temas
                mencionados. Sus áreas de interés en investigación son los
                hallazgos neuroanatómicos y las alteraciones
                genéticassubyacentes en los trastornos neuropediátricos,
                particularmente los relacionados con el neurodesarrollo
                (autismo, discapacidad intelectual…) y la epilepsia.
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
          <h2 className="nombre-ponente">Dr. Alberto Fernández</h2>
          <p className="titulo-ponente">Neurología infantil </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dr. Alberto Fernández</h2>
          <p className="titulo-ponente">Neurología infantil </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ProfesorK;
