import React from "react";

import heroBackground from '../../assets/studiuj-online-background.png'
import linkBackground from '../../assets/logo-wsfi-braz-bez-tła.png'

console.log(document.querySelector('.hero-link'));


const Hero = () => (

    <div className='container hero'>
        <img className='hero-background' src={heroBackground} alt='background'/>
        <a className='hero-link' href='https://www.wsfi.edu.pl/' target='_blank' rel='noopener noreferrer'>
            <img className='hero-link__background' src={linkBackground} alt="link"/>
        </a>
        {/*<div className='hero-background'/>*/}
        <div className='hero-info'>
            <h1 className='hero-title'>Wyższa Szkoła Finansów i Informatyki - studia online</h1>
            <p>kształci studentów od 1997 roku. Ma bogate, wieloletnie doświadczenie w nauczaniu na kierunkach ekonomicznych. Mury uczelni opuściło prawie 4 tys. absolwentów. Ich losy potwierdzają dobre ich przygotowanie do zawodów i działań w biznesie.</p>
            <p>Naszą misją jest przekazywanie wiedzy i praktycznych umiejętności, w przyjaznym środowisku, apewniających absolwentom osiąsiąganie sukcesów wzmacniających prestiż Uczelni. Kształtujemy odpowiedialnych, kompetentnych profesjonalistów, pewnie wkraczających na rynejk pracy.</p>
        </div>
    </div>
)

export default Hero;