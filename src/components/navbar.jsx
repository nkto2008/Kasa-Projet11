import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/navbar.scss';
import kasaLogo from '../assets/img/color/kasa.svg';


function Navbar() {
    const location = useLocation();

    return (
        <nav>
            <Link to="/" className='lnk_img'>
                <img className="logo" src={kasaLogo} alt="Kasa Logo" />
            </Link>
            <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/" activeclassname="active">Accueil</Link>
                </li>
                <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/about" activeclassname="active">À Propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
