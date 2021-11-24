import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImgProfesor =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Profesores%2FDra.%20Remedios%20Vazquez.png?alt=media&token=08d56587-7410-4852-a1d9-c3dcd4595a94";
function ProfesorV() {
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
              <p className="nombre">Lic. Remedios Vázquez </p>
              <p className="titulo-ponente">Trabajo social </p>
              <p className="trayectoria">
                Licenciada en Trabajo Social por la UNAM, maestra en tanatología
                por el Instituto Mexicano de Psicooncologia; es miembro
                honorario del Comité de Bioética y de Bioética en Investigación
                del Hospital Pediátrico Moctezuma de la Secretaría de Salud de
                la Ciudad de México. Fue miembro del Consejo Directivo del
                Colegio de Trabajadores de México A. C., Ha realizado varios
                diplomados: Desarrollo de habilidades Gerenciales de los
                Sistemas de Salud, tanatología, Derechos Humanos, Violencia,
                Cuidados Paliativos y Tanatología, Intervención social en
                familias, terapia familiar y en terapia familiar. Ha brindado
                más de 50 conferencias en diversos centros de salud de los tres
                diferentes niveles de atención. Actualmente es integrante del
                equipo integral de atención a pacientes con malformación
                anorectal en la Fundación Momentum y es Trabajadora Social
                adscrita a la clínica de Patología Dual en el Hospital
                Psiquiátrico Infantil, Dr. Juan N. Navarro de la Secretaria de
                Salud Federal.
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
          <h2 className="nombre-ponente">Lic. Remedios Vázquez </h2>
          <p className="titulo-ponente">Trabajo social </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Lic. Remedios Vázquez </h2>
          <p className="titulo-ponente">Trabajo social </p>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProfesorV;
