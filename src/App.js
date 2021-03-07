
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Home from './Containers/Home/Home';
import axios from 'axios';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import About from './Containers/About/About';

function App() {

  const [ciudades, setCiudades] = useState([]);

  const buscar = async (ciudad) => {

    let ciudadBuscada = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=891650fae4d1a4a4129b508d76ba13a1&units=metric`);
    ciudades.find(c => c.id === ciudadBuscada.data.id)
    ? alert('Ya se busco la ciudad')
    : setCiudades([...ciudades, ciudadBuscada.data]); 
    
  }

  const eliminar = (id) => {
    let filtradas = ciudades.filter(c => c.id !== id);
    setCiudades(filtradas);
  }

  return (
      <div className="App">
        <Navbar buscar={buscar}/>
        <Route exact path='/' render={() => <Home ciudades={ciudades} eliminar={eliminar}/>}/>
        <Route path='/about' component={About}/>
      </div>    
  );
}

export default App;
