import React from 'react'
import { StyledHome } from './StyledHome';
import Card from '../../Components/Card/Card';
// import { Zoom } from 'react-reveal';

export default function Home({ ciudades, eliminar }) {
    return (
        <StyledHome>
            {/* <div className='card-home'>
                <h1>Bienvenidos</h1>
                <ul>
                    <li>Esta es mi primer app desarrollada desde cero como parte de mi formación como fullstack developer, espero que sea de su agrado.</li>
                    <li>Busca una ciudad para conocer su clima!</li>
                    <li>Con amor niñito ♥</li>
                </ul>
            </div> */}
            <div className='card-container' >
                {
                    ciudades.map(c => <Card ciudad={c} eliminar={eliminar}/>)
                }
            </div>
        </StyledHome>
    )
}