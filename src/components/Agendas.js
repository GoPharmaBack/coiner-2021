import React from "react";
const agenda1 =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/agenda%2F25_NOV_AGENDA.png?alt=media&token=e016ca21-65db-4372-aefd-ec23abcf3b24";
const agenda2 =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/agenda%2F26_NOV_AGENDA.png?alt=media&token=47dceb5d-b242-40a5-8919-b1943087418f";
const agenda3 =
  "https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/agenda%2FRecurso%202.png?alt=media&token=4da59ca6-8f3f-4fc2-a13c-dc5e1842e7cd";
function Agendas() {
  return (
    <React.Fragment>
      <br />
      <h4>Conoce la agenda del Congreso</h4>
      <div className="contenedor-agendas">
        <img src={agenda1} className="Agenda" alt="coiner-agenda 25" />
        <img src={agenda2} className="Agenda" alt="coiner-agenda 26" />
        <img src={agenda3} className="Agenda" alt="coiner-agenda 27" />
      </div>
    </React.Fragment>
  );
}

export default Agendas;
