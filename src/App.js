import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import "./scss/index.scss";
import Routes from "./routes/Routes";
function App() {
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

      <footer>
        <small>
          Copyright © 2021 <i>CONGRESO COINER,</i> All rights reserved.
        </small>
      </footer>
    </div>
  );
}

export default App;
