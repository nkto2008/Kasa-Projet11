import React from 'react';
import { Link } from 'react-router-dom';
import './assets/not_found.scss';
function NotFound(){
    return (
        <div className='not_found'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='lnk'>Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default NotFound;
