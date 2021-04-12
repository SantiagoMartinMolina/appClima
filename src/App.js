
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Home from './Containers/Home/Home';
import axios from 'axios';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import About from './Containers/About/About';
import Credits from './Containers/Credits/Credits';
import Modal from './Components/Modal/Modal';

function App() {

  const [ciudades, setCiudades] = useState([]);
  const [isToggled, setToggled] = useState(false);

  const buscar = async (ciudad) => {
    let ciudadBuscada = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=891650fae4d1a4a4129b508d76ba13a1&units=metric`);
    console.log(ciudadBuscada);
    setToggled(true);
    ciudades.find(c => c.id === ciudadBuscada.data.id)
      ? alert('Ya se busco la ciudad')
      : setCiudades([...ciudades, ciudadBuscada.data]);
  }

  const eliminar = (id) => {
    let filtradas = ciudades.filter(c => c.id !== id);
    setCiudades(filtradas);
  }

  return (
    <div className="App" onClick={() => setToggled(false)}>
      <Modal isToggled={isToggled} setToggled={setToggled} />
      <Navbar buscar={buscar} />
      <Route exact path='/' render={() => <Home ciudades={ciudades} eliminar={eliminar} />} />
      <Route path='/about' component={About} />
      <Route path='/creditos' component={Credits} />

    </div>
  );
}

export default App;
