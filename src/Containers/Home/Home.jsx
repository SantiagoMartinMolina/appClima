import React from 'react'
import { StyledHome } from './StyledHome';
import Card from '../../Components/Card/Card';
// import { Zoom } from 'react-reveal';

export default function Home({ ciudades, eliminar }) {
    return (
        <StyledHome>
            
            <div className='info'>
                <p>
                    Utiliza esta app para buscar una ciudad y obtener sus datos meteorológicos
                </p>
            </div>
            <div className='card-container' >
                {
                    ciudades.map(c => <Card ciudad={c} eliminar={eliminar}/>)
                }
            </div>
        </StyledHome>
    )
}