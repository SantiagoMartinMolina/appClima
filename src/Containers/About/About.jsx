import React from 'react';
import { StyledAbout } from './StyledAbout';

export default function About() {
    return (
        <StyledAbout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Weather App</h1>
            <div className='container'>
                <p className='text'>
                    Esta es una pequeña aplicación desarrollada como práctica en mi formación como fullstack developer.
                </p>

                <div className='technologies'>
                    <h4>Las tecnologias que utilicé son:</h4>
                    <div className='tech-cont'>
                        <p className='mg-r'><i class="fab fa-js-square"></i>Javascript</p>
                        <p className='mg-r'><i class="fab fa-react"></i>React</p>
                        <p><i class="fab fa-css3-alt"></i>CSS</p>
                    </div>
                </div>


                <p className='text'>
                    Espero que sea de su agrado, tambien estoy abierto a cualquier crítica para poder seguir mejorando. Muchas gracias por visitar mi app!
                </p>

                <div className='redes' >
                    <h4>Mis redes son:</h4>
                    <div className='links-container'>
                        <p className='mg-r'><i class="fab fa-github"></i> <a href="https://github.com/SantiagoMartinMolina" target="_blank" rel="noreferrer">Github</a></p>
                        <p><i class="fab fa-linkedin-in"></i> <a href="https://www.linkedin.com/in/santiago-molina-dev/" target="_blank" rel="noreferrer">Linkedin</a></p>
                    </div>
                </div>
            </div>

        </StyledAbout>
    );
}
