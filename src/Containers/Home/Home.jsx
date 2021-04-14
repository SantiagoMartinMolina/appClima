import React from 'react'
import { StyledHome } from './StyledHome';
import Card from '../../Components/Card/Card';
// import { Zoom } from 'react-reveal';
import { AnimatePresence, motion } from "framer-motion"


export default function Home({ ciudades, eliminar, setToggled, isToggled, setCity }) {
    return (
        <StyledHome>
            {
                ciudades.length === 0
                    ?
                    <motion.div
                        className='welcome'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1>Bienvenido</h1>
                        <p>
                            Utiliza esta app para buscar una ciudad y ver sus datos meteorológicos. Luego de buscar, podés hacer click en la tarjeta para ver mas información!
                        </p>

                    </motion.div>
                    :
                    <div className='card-container' >
                        <AnimatePresence>
                            {
                                ciudades.map(c => <Card key={c.id} ciudad={c} eliminar={eliminar} setToggled={setToggled} isToggled={isToggled} setCity={setCity} />)
                            }
                        </AnimatePresence>
                    </div>
            }

        </StyledHome>
    )
}