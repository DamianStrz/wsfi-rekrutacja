import React, {useState} from 'react';

import linkBackground from "../../assets/logo-wsfi-braz-bez-tła.png";

const Footer = () => {

    const [rodo, setRodo] = useState('https://www.wsfi.edu.pl/files/obowiazek_informacyjny_studia.pdf')


    return (
        <footer className='container footer'>
            <div className='footer-content'>
                <p className='footer-content__left'>tel.: 42 639 91 10, 501 24 87 81</p>
                <a href='https://www.wsfi.edu.pl/' target='_blank' rel='noopener noreferrer'>
                    <img className='footer-content__logo' src={linkBackground} alt="link"/>
                </a>
                <p className='footer-content__right'> e-mail: dziekanat@wsfi.pl</p>
            </div>
            <a className='footer-rodo' href={rodo} target='_blank' rel='noopener noreferrer'>
                Zapoznaj się z informacjami dotyczącymi danych osobowych kandydatów na studia</a>
        </footer>
    )
}

export default Footer;