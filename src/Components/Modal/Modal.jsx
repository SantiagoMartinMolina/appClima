import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { StyledModalNotFound, StyledModalRepeated, StyledModalDetail, StyledOverlay } from './StyledModal';



export default function Modal({ isToggled, setToggled, city }) {
    return (
        <AnimatePresence>
            {
                isToggled.notFound &&
                <StyledOverlay
                    onClick={() => {
                        setToggled({ ...isToggled, notFound: false });
                    }}
                >
                    <StyledModalNotFound
                        onClick={(ev) => {
                            ev.stopPropagation();
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.2 }}
                    >
                        <i class="fas fa-exclamation-circle"></i>
                        <p>No se encontró la ciudad</p>

                        <button onClick={() => setToggled({ ...isToggled, notFound: false })}>Aceptar</button>
                    </StyledModalNotFound>
                </StyledOverlay>
            }
            {
                isToggled.repeated &&
                <StyledOverlay
                    onClick={() => {
                        setToggled({ ...isToggled, repeated: false });
                    }}
                >

                    <StyledModalRepeated
                        onClick={(ev) => {
                            ev.stopPropagation();
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.2 }}
                    >
                        <i class="fas fa-exclamation-triangle"></i>
                        <p>Ya se buscó la ciudad</p>
                        <button onClick={() => setToggled({ ...isToggled, repeated: false })}>Aceptar</button>
                    </StyledModalRepeated>
                </StyledOverlay>
            }
            {
                isToggled.detail &&
                <StyledOverlay onClick={() => {
                    setToggled({ ...isToggled, detail: false });
                }}>

                    <StyledModalDetail
                        onClick={(ev) => {
                            ev.stopPropagation();
                        }}

                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.2 }}
                    >

                        <div className='info-container'>
                            <h1>{city.name}, {city.sys.country} <i class="fas fa-map-marker-alt"></i></h1>
                            <p>Descripcion: {city.weather[0].description} </p>

                            <p>Presion: {city.main.pressure} hPa</p>
                            <p>Humedad: {city.main.humidity}%</p>
                            <p>Viento: {city.wind.speed} m/s</p>
                            <p>Nubosidad: {city.clouds.all}%</p>
                            <button onClick={() => setToggled({ ...isToggled, detail: false })}><i class="fas fa-times"></i></button>
                        </div>



                    </StyledModalDetail>
                </StyledOverlay>
            }
        </AnimatePresence>
    )
}
