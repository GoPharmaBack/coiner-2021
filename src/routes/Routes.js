
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Registro from "../views/Registro"
import Gracias from "../views/Gracias"
function Routes() {
  return (
    <Router>

      <Switch>
        <Route>
        <Route exact path="/" component={Home} />
  <Route exact path="/registro" component={Registro}/>
  <Route exact path="/gracias" component={Gracias}/>
        </Route>
      </Switch>
      
    </Router>
  )
}

export default Routes
