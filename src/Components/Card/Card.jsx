import React from 'react'
import { StyledCard } from './StyledCard';

export default function Card({ ciudad, eliminar }) {

    return(
        <StyledCard >
            <button onClick={() => eliminar(ciudad.id)}>x</button>
            <h1>{ciudad.name}</h1>
            <div className='info'>
                {/* <div> */}
                    <p>Min: <span>{ciudad.main.temp_min}°</span></p>
                    <p>Max: <span>{ciudad.main.temp_max}°</span></p>
                {/* </div> */}
                <img src={`http://openweathermap.org/img/wn/${ciudad.weather[0].icon}@2x.png`}  alt="" />
            </div>
        </StyledCard>
    )

}