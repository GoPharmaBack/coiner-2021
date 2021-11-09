import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Registro from "../views/Registro";
import Gracias from "../views/Gracias";
import Aviso from "../views/Aviso";
function Routes() {
  return (
    <Router>
      <Switch>
        <Route>
          <Route exact path="/" component={Home} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/gracias" component={Gracias} />
          <Route exact path="/aviso_de_privacidad" component={Aviso} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
