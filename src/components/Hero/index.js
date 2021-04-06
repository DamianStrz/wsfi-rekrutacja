import React from "react";

import heroBackground from '../../assets/hero-background.png'

const Hero = () => (
    <div className='container hero'>
        <img src={heroBackground} alt='background'/>
        <div className='hero-info'>
            <p><strong>Wyższa Szkoła Finansów i Informatyki im. prof. Janusza Chechlińskiego</strong> kształci studentów od 1997 roku. Ma bogate, wieloletnie doświadczenie w nauczaniu na kierunkach ekonomicznych. Mury uczelni opuściło prawie 4 tys. absolwentów. Ich losy potwierdzają dobre ich przygotowanie do zawodów i działań w biznesie.</p>
            <p>Naszą misją jest przekazywanie wiedzy i praktycznych umiejętności, w przyjaznym środowisku, apewniających absolwentom osiąsiąganie sukcesów wzmacniających prestiż Uczelni. Kształtujemy odpowiedialnych, kompetentnych profesjonalistów, pewnie wkraczających na rynejk pracy.</p>
        </div>
    </div>
)

export default Hero;