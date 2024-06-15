import React from 'react';
import '../assets/footer.scss';
import whiteKasa from '../assets/img/white/kasa.svg';

function Footer() {
    return (
        <div className='footer'>
            <img className="logo" src={whiteKasa} alt="White Kasa Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;