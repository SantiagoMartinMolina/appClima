import React, { useState } from 'react';
import { StyledSearch } from './StyledSearch';

export default function Search({ buscar }) {

    const [input, setInput] = useState('');

    const handleChange = (ev) =>{
        setInput(ev.target.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        buscar(input);
        setInput('');
    }

    return (
        <StyledSearch onSubmit={handleSubmit}>
            <div className='input-container'>
                <input onChange={handleChange} type="text" value={input} />
            </div>
            <button className='btn' type='submit'>Buscar</button>
        </StyledSearch>
    )
}