import React from 'react'
import { StyledCard } from './StyledCard';


const variants = {
    hidden: { opacity: 0, y: -300 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.03, backgroundColor: 'rgba(182, 238, 194, 0.5)' }
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
export default function Card({ ciudad, eliminar, setToggled, isToggled, setCity }) {

    return (

        <StyledCard
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, y: 200 }}
            onClick={(ev) => {
                ev.stopPropagation();
                setCity(ciudad);
                setToggled({ ...isToggled, detail: true });
            }}
            whileHover="hover"
        >
            <button onClick={(ev) => {
                ev.stopPropagation();
                eliminar(ciudad.id);
            }}><i class="fas fa-times"></i></button>
            <h1>{ciudad.name}</h1>
            <div className='info'>
                {/* <div> */}
                {console.log(isToggled)}
                <p>Min: <span>{ciudad.main.temp_min}°</span></p>
                <p>Max: <span>{ciudad.main.temp_max}°</span></p>
                {/* </div> */}
                <img src={`http://openweathermap.org/img/wn/${ciudad.weather[0].icon}@2x.png`} alt="" />
            </div>
        </StyledCard>
    )

}