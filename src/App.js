import logo from './img/logo.png';
import LogoCoiner from './img/COINER.png'
import './scss/index.scss'

function App() {
  return (
    <div className="App">
      <section className="App-contenedor">
        <img src={logo} className="App-logo" alt="logo" />
        
      <h1>Reserva la Fecha</h1>
      <h2>25,26 y 27 de noviembre</h2>
          
      <img src={LogoCoiner} className="App-logo" alt="logo" />
      </section>
    </div>
  );
}

export default App;
