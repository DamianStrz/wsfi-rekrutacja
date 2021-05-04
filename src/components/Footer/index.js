import React, {useState} from 'react';

import linkBackground from "../../assets/logo-wsfi-braz-bez-tła.png";

const Footer = () => {

    const [rodo, setRodo] = useState('https://www.wsfi.edu.pl/files/obowiazek_informacyjny_studia.pdf')


    return (
        <footer className='container footer'>
            <div className='footer-content'>
                <address className='footer-content__left'>
                    <a className='footer-content__facebook'
                       href='https://www.facebook.com/WSFI.Lodz'
                       target='_blank' rel='noopener noreferrer'>
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    &nbsp;Wyższa Szkoła Finansów i Informatyki w Łodzi<br/>
                    ul. Wróblewskiego 18/801, 93-578 Łódź <br/>
                    tel.: 42 639 91 10, 501-016-524 <br/>
                    e-mail: dziekanat@wsfi.pl
                </address>
                <a href='https://www.wsfi.edu.pl/' target='_blank' rel='noopener noreferrer'>
                    <img className='footer-content__logo' src={linkBackground} alt="link"/>
                </a>
                <address className='footer-content__right'>
                    <a className='footer-content__facebook'
                       href='https://www.facebook.com/WSFI.Kalisz'
                       target='_blank' rel='noopener noreferrer'>
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    &nbsp;Wydział Ekonomii w Kaliszu <br/>
                    ul. Widok 96A, 62-800 Kalisz <br/>
                    tel.: 62 753 56 53, 501-016-529 <br/>
                    e-mail: kalisz@wsfi.pl

                </address>
            </div>
            <a className='footer-rodo' href={rodo} target='_blank' rel='noopener noreferrer'>
                Zapoznaj się z informacjami dotyczącymi danych osobowych kandydatów na studia</a>
        </footer>
    )
}

export default Footer;