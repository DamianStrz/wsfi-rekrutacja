import React from 'react';


const AnimatedInfo = () => {

    const onClick = (e) => {

        e.target.classList.toggle('active');

    }


    return(
        <div className='container circles'>
            <h1 className='circles-title'>Zasady rekrutacji</h1>
            <div className='circles-field'>
                <div className='circles1-left' id='firstCircle' onClick={onClick}>
                    Wymagane dokumenty
                </div>
                <div className='circles1-right'/>
                <div className='circles2-left'>Formularz<br/> rekrutacyjny</div>
                <div className='circles2-right'/>
                <div className='circles3-left'>Terminy</div>
                <div className='circles3-right'/>
                <div className='circles4-left'>Opłaty</div>
                <div className='circles4-right'/>
                <div className='circles5-left'>Zasady</div>
                <div className='circles5-right'/>
            </div>


        </div>
    )
}


export default AnimatedInfo;