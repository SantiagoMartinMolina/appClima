import React from 'react';
import { StyledCredits } from './StyledCredits';

export default function Credits() {
    return (
        <StyledCredits>
            <h1>Créditos</h1>
            <div>
                <p>
                    Esta app consume datos de la API <a href="https://openweathermap.org/api" target='_blank' rel="noreferrer">Open Weather</a>
                </p>
                <p>
                    El autor de la imagen de fondo es <a href="https://unsplash.com/@debrupas" target='_blank' rel="noreferrer">Pascal Debrunner</a> publicada en <a href="https://unsplash.com/" target='_blank' rel="noreferrer">Unsplash</a>
                </p>
            </div>

        </StyledCredits>
    )
}
