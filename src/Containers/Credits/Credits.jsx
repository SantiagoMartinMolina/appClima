import React from 'react';
import { StyledCredits } from './StyledCredits';

export default function Credits() {
    return (
        <StyledCredits
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Créditos</h1>
            <div>
                <p>
                    Esta app consume datos de la API <a href="https://openweathermap.org/api" target='_blank' rel="noreferrer">Open Weather</a>
                </p>
                <p>
                    El autor de la imagen de fondo es <a href="https://unsplash.com/@leolaub" target='_blank' rel="noreferrer">Leonard Laub</a> publicada en <a href="https://unsplash.com/" target='_blank' rel="noreferrer">Unsplash</a>
                </p>
            </div>

        </StyledCredits>
    )
}
