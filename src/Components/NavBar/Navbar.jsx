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
                <div className='links' >
                    <Link to='/About'>
                        Informacion
                    </Link>
                    <Link to='/Creditos'>
                        Créditos
                    </Link>
                </div>
                <Search buscar ={buscar}/>
            </div>
        </StyledNavbar>
    )
}