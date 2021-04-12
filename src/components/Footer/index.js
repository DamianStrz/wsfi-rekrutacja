import React from 'react';

import logo from '../../assets/logo-wsfi-białe-bez-tła.png'

const Footer = () => {

    return (
        <footer className='container footer'>
            <div className='footer-content'>
                <p className='footer-content__left'>tel.: 42 639 91 10, 501 24 87 81</p>
                <img className='footer-content__logo' src={logo} alt="logo"/>
                <p className='footer-content__right'> e-mail: dziekanat@wsfi.pl</p>
            </div>
        </footer>
    )
}

export default Footer;