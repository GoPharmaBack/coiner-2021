import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ImgPonente =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/5_DraNorma_Guerra.png?alt=media&token=ee367caf-678a-4c35-9d81-903d2abb43c4";
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
              <p className="nombre">Dra. Norma Guerra</p>
              <p className="titulo-ponente">Nefrologia Pediátrica </p>
              <p className="trayectoria">
                Médico adscrito al servicio de Nefrología Pediátrica en Centro
                Médico Nacional “La Raza.” Miembro de la Mesa directiva del
                Consejo Mexicano de Nefrología, del Colegio de Nefrólogos de
                México y del Sistema Nacional de Investigadores.
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
          src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/5_DraNorma_Guerra.png?alt=media&token=ee367caf-678a-4c35-9d81-903d2abb43c4"
          alt="comite"
        />
        <div className="info">
          <h2 className="nombre-ponente">Dra. Norma Guerra</h2>
          <p className="titulo-ponente">Nefrologia Pediátrica </p>
        </div>

        <div className="nombre-card">
          <h2 className="nombre-ponente">Dra. Norma Guerra</h2>
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
