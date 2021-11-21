import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Registro from "../views/Registro";
import Gracias from "../views/Gracias";
import Aviso from "../views/Aviso";
import ScrollToTop from "../components/ScrollToTop";
import NotFound from "../views/404";
import ProtectedRoutes from "./ProtectedRoutes";
import Transmition from "../views/Transmition";
import Cookies from "universal-cookie";
import Login from "../views/Login";

const cookies = new Cookies();
function Routes() {
  let Autorizado = cookies.get("message");
  const [isAuth] = useState(Autorizado);

  useEffect(() => {
    if (isAuth === "Auth succesful") {
      console.log("acceso ✨");
    } else {
      console.log("Sin Acceso 😅");
      localStorage.setItem("lang", "en");
    }
  });
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/gracias" component={Gracias} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoutes
          path="/evento"
          component={Transmition}
          isAuth={isAuth}
        />
        <Route exact path="/aviso_de_privacidad" component={Aviso} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
