import React, { useState } from 'react'
import { StyledHome } from './StyledHome';
import Card from '../../Components/Card/Card';
// import { Zoom } from 'react-reveal';
import { AnimatePresence } from "framer-motion"
import Modal from '../../Components/Modal/Modal';


export default function Home({ ciudades, eliminar }) {
    return (
        <StyledHome>

            <div className='info'>
                <p>
                    Utiliza esta app para buscar una ciudad y obtener sus datos meteorológicos
                </p>

            </div>
            <div className='card-container' >
                <AnimatePresence>
                    {
                        ciudades.map(c => <Card key={c.id} ciudad={c} eliminar={eliminar} />)
                    }
                </AnimatePresence>
            </div>
        </StyledHome>
    )
}