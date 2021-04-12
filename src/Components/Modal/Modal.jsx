import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledModal } from './StyledModal';



export default function Modal({ isToggled, setToggled }) {
    return (
        <AnimatePresence>
            {
                isToggled &&
                <StyledModal
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.2 }}
                >
                    Este es el modal
                <button onClick={() => setToggled(false)}>cerrar</button>
                </StyledModal>
            }
        </AnimatePresence>
    )
}
