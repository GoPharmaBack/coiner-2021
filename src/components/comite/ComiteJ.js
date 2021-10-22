import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/10_DraLuzMaria_Sanchez.png?alt=media&token=4b66288c-6729-4967-af50-8eecc910fec0";
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
              <p className="nombre">Dra. Luz María Sánchez </p>
              <p className="titulo-ponente">Pediatría y Neonatología </p>
              <p className="trayectoria">
                Trabajó 28 años en el Hospital de Especialidades No. 25 del IMSS
                en Monterrey, NL y actualmente se dedica a la medicina privada.
                Se ha dedicado a las enfermedades raras desde hace más de 15
                años. Miembro de grupos de expertos nacionales e internacionales
                en enfermedades raras. Profesora de Pediatria por más de 20 años
                e investigadora clínica del Sistema Nacional de Investigadores.
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
          src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/10_DraLuzMaria_Sanchez.png?alt=media&token=4b66288c-6729-4967-af50-8eecc910fec0"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Luz María Sánchez </h2>
          <p className="titulo-ponente">Pediatría y Neonatología </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Luz María Sánchez </h2>
          <p className="titulo-ponente">Nefrologia Pediátrica </p>
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
