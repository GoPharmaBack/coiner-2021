import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import "./scss/index.scss";
import Routes from "./routes/Routes";
import * as ReactBootStrap from "react-bootstrap";
function App() {
  const [DescriptionApi, setDescriptionApi] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const descriptionFunc = async () => {
    try {
      const data = await axios
        .get("https://coiner-2021.herokuapp.com/")
        .then((res) => {
          console.log(res);
          console.log(res.data.description);
          setDescriptionApi();
        });
      console.log(data);
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    descriptionFunc();
  }, []);
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            color: {
              value: "#fff",
            },
            number: {
              value: 70,
            },
            size: {
              value: 3.6,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />

      <Routes />
      {isLoading ? (
        DescriptionApi
      ) : (
        <div className="contenedor-loader">
          <ReactBootStrap.Spinner animation="border" className="loader" />
        </div>
      )}

      <footer>
        <small>
          Copyright © 2021 <i>CONGRESO COINER,</i> All rights reserved.
        </small>
      </footer>
    </div>
  );
}

export default App;
