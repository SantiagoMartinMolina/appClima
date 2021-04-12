import React from 'react'
import { StyledCard } from './StyledCard';


const variants = {
    hidden: { opacity: 0, y: -300, x: -300, rotateZ: 100 },
    visible: { opacity: 1, y: 0, x: 0, rotateZ: 0 },
    // visible: {
    // x: 100,
    // backgroundColor: "#000",
    // boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
    // position: "fixed",
    // transitionEnd: {
    // display: "none",
    // }
    // }
}
export default function Card({ ciudad, eliminar }) {

    return (

        <StyledCard initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.2 }} exit={{ opacity: 0 }}>
            <button onClick={() => eliminar(ciudad.id)}>x</button>
            <h1>{ciudad.name}</h1>
            <div className='info'>
                {/* <div> */}
                <p>Min: <span>{ciudad.main.temp_min}°</span></p>
                <p>Max: <span>{ciudad.main.temp_max}°</span></p>
                {/* </div> */}
                <img src={`http://openweathermap.org/img/wn/${ciudad.weather[0].icon}@2x.png`} alt="" />
            </div>
        </StyledCard>
    )

}