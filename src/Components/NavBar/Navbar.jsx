import React from 'react'
import { StyledNavbar } from './StyledNavbar';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';

export default function Navbar({ buscar, setToggled }) {

    return (
        <StyledNavbar>
            <div className='nav-container'>
                <NavLink exact to='/'>
                    <h1>
                        {`Santiago Molina - Weather App`}
                    </h1>
                </NavLink>
                <div className='links' >
                    <NavLink to='/About'>
                        Información
                    </NavLink>
                    <NavLink to='/Creditos'>
                        Créditos
                    </NavLink>
                </div>
                <Search buscar={buscar} />
            </div>
        </StyledNavbar>
    )
}