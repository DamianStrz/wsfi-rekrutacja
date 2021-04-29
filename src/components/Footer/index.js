import React from 'react';

import linkBackground from "../../assets/logo-wsfi-braz-bez-tła.png";

const Footer = () => {

    return (
        <footer className='container footer'>
            <div className='footer-content'>
                <p className='footer-content__left'>tel.: 42 639 91 10, 501 24 87 81</p>
                <a href='https://www.wsfi.edu.pl/' target='_blank' rel='noopener noreferrer'>
                    <img className='footer-content__logo' src={linkBackground} alt="link"/>
                </a>
                <p className='footer-content__right'> e-mail: dziekanat@wsfi.pl</p>
            </div>
        </footer>
    )
}

export default Footer;