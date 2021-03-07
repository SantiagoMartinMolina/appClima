import React from 'react'
import { StyledNavbar } from './StyledNavbar';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

export default function Navbar({ buscar }) {
    
    return (
        <StyledNavbar>
            <div className='nav-container'>
                <Link to='/'>
                    <h1>
                        {`Santiago Molina - Weather App`}
                    </h1>
                </Link>
                <Link to='/About'>
                    Sobre mí
                </Link>
                <Search buscar ={buscar}/>
            </div>
        </StyledNavbar>
    )
}