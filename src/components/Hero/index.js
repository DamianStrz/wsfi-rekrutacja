import React from "react";

import heroBackground from '../../assets/hero-background-nobckrnd.png'
import linkBackground from '../../assets/logo-wsfi-białe-bez-tła.png'

const Hero = () => (

    <div className='container hero'>
        <div className='hero-base'>
            <h1 className='hero-base__title'>Studiuj <span className='online'>on-line</span>!</h1>
            <img className='hero-background' src={heroBackground} alt='background'/>
            <a className='hero-link' href='https://www.wsfi.edu.pl/' target='_blank' rel='noopener noreferrer'>
                <img className='hero-link__background' src={linkBackground} alt="link"/>
            </a>
        </div>

        {/*<div className='hero-background'/>*/}
        <div className='hero-info'>
            <h1 className='hero-title'>Wyższa Szkoła Finansów i Informatyki - studia <span className='online'>on-line</span></h1>
            <ul className='hero-list'>
                <span className='online'>E-learning</span> to przyszłość na jaka zasługujesz! Przekonaj się już dziś, że to:
                <li>oszczędność czasu - nie musisz już stać w korkach w drodze na uczelnie</li>
                <li>nie musisz stać w kolejce do dziekanatu czy na konsultacje - wszystkie
                    formalności możesz załatwiać za pomocą czatów, poczty oraz komunikatorów
                    platform do <span className='online'>e-learningu</span></li>
                <li>sam decydujesz o tempie, czasie i miejscu nauki</li>
                <li>poznasz nowe formy szybszej i efektywniejszej nauki - dzięki
                    innowacyjnemu podejściu do prezentowanych treści</li>
            </ul>
        </div>
    </div>
)

export default Hero;