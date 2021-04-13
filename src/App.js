
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
  const [isToggled, setToggled] = useState({ notFound: false, repeated: false, detail: false });
  const [city, setCity] = useState({});


  const buscar = async (ciudad) => {
    try {

      let ciudadBuscada = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=891650fae4d1a4a4129b508d76ba13a1&units=metric`);
      ciudades.find(c => c.id === ciudadBuscada.data.id)
        ? setToggled({ ...isToggled, repeated: true })
        : setCiudades([...ciudades, ciudadBuscada.data]);
    } catch (error) {

      setToggled({ ...isToggled, notFound: true });
      console.log('ERROR', error);
    }

  }

  const eliminar = (id) => {
    let filtradas = ciudades.filter(c => c.id !== id);
    setCiudades(filtradas);
  }


  return (
    <div className="App">
      <Modal isToggled={isToggled} setToggled={setToggled} city={city} />
      <Navbar buscar={buscar} />
      <Route exact path='/' render={() => <Home ciudades={ciudades} eliminar={eliminar} setToggled={setToggled} isToggled={isToggled} setCity={setCity} />} />
      <Route path='/about' component={About} />
      <Route path='/creditos' component={Credits} />

    </div>
  );
}

export default App;
