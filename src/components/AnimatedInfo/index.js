import React, {useState, useEffect} from 'react';


const AnimatedInfo = () => {

    // const [active, setActive] = useState(false)

    const [circleData, setCircleData] = useState({
        firstActive: false,
        secondActive: false,
        thirdActive: false,
        fourthActive: false,
        fifthActive: false
    })



    const handleCircleClick = (e) => {

        if (e.target.id === 'firstCircle1') {
            e.target.classList.toggle('active');

            const rightCircles = document.querySelectorAll(`[id^="secondCircle"]`)

            rightCircles.forEach((el => el.classList.toggle('inactive')));

            // document.getElementById('secondCircle1').classList.toggle('inactive');
            // document.getElementById('secondCircle2').classList.toggle('inactive');
            // document.getElementById('secondCircle3').classList.toggle('inactive');
            // document.getElementById('secondCircle4').classList.toggle('inactive');
            // document.getElementById('secondCircle5').classList.toggle('inactive');


            document.getElementById('firstCircle2').classList.toggle('inactive');
            document.getElementById('firstCircle3').classList.toggle('inactive');
            document.getElementById('firstCircle4').classList.toggle('inactive');
            document.getElementById('firstCircle5').classList.toggle('inactive');

            setCircleData({...circleData, firstActive: !circleData.firstActive});

        } else if (e.target.id === 'firstCircle2') {
            e.target.classList.toggle('active');

            const rightCircles = document.querySelectorAll(`[id^="secondCircle"]`)

            rightCircles.forEach((el => el.classList.toggle('inactive')));

            document.getElementById('firstCircle1').classList.toggle('inactive');
            document.getElementById('firstCircle3').classList.toggle('inactive');
            document.getElementById('firstCircle4').classList.toggle('inactive');
            document.getElementById('firstCircle5').classList.toggle('inactive');

            setCircleData({...circleData, secondActive: !circleData.secondActive});

        } else if (e.target.id === 'firstCircle3') {
            e.target.classList.toggle('active');

            const rightCircles = document.querySelectorAll(`[id^="secondCircle"]`)

            rightCircles.forEach((el => el.classList.toggle('inactive')));

            document.getElementById('firstCircle1').classList.toggle('inactive');
            document.getElementById('firstCircle2').classList.toggle('inactive');
            document.getElementById('firstCircle4').classList.toggle('inactive');
            document.getElementById('firstCircle5').classList.toggle('inactive');

            setCircleData({...circleData, thirdActive: !circleData.thirdActive});

        } else if (e.target.id === 'firstCircle4') {
            e.target.classList.toggle('active');

            const rightCircles = document.querySelectorAll(`[id^="secondCircle"]`)

            rightCircles.forEach((el => el.classList.toggle('inactive')));

            document.getElementById('firstCircle1').classList.toggle('inactive');
            document.getElementById('firstCircle2').classList.toggle('inactive');
            document.getElementById('firstCircle3').classList.toggle('inactive');
            document.getElementById('firstCircle5').classList.toggle('inactive');

            setCircleData({...circleData, fourthActive: !circleData.fourthActive});

        } else if (e.target.id === 'firstCircle5') {

            e.target.classList.toggle('active');

            const rightCircles = document.querySelectorAll(`[id^="secondCircle"]`)

            rightCircles.forEach((el => el.classList.toggle('inactive')));

            document.getElementById('firstCircle1').classList.toggle('inactive');
            document.getElementById('firstCircle2').classList.toggle('inactive');
            document.getElementById('firstCircle3').classList.toggle('inactive');
            document.getElementById('firstCircle4').classList.toggle('inactive');

            setCircleData({...circleData, fifthActive: !circleData.fifthActive});

        }

        e.stopPropagation();

    }


    const handleListClick = (e) => {

        setCircleData({...circleData, firstActive: !circleData.firstActive});

        console.log(circleData.firstActive)

        document.getElementById('firstCircle1').classList.toggle('active');
        //
        document.getElementById('secondCircle1').classList.toggle('inactive');
        document.getElementById('secondCircle2').classList.toggle('inactive');
        document.getElementById('secondCircle3').classList.toggle('inactive');
        document.getElementById('secondCircle4').classList.toggle('inactive');
        document.getElementById('secondCircle5').classList.toggle('inactive');

        document.getElementById('firstCircle2').classList.toggle('inactive');
        document.getElementById('firstCircle3').classList.toggle('inactive');
        document.getElementById('firstCircle4').classList.toggle('inactive');
        document.getElementById('firstCircle5').classList.toggle('inactive');
        //
        e.stopPropagation();
        //

    }


    return(
        <div className='container circles'>
            <h1 className='circles-title'>Zasady rekrutacji</h1>
            <div className='circles-field'>
                <div className='circles1-left' id='firstCircle1' onClick={handleCircleClick}>
                    {circleData.firstActive === false
                        ? 'Wymagane dokumenty'
                        : <ul className='circles-list' onClick={handleListClick}>
                            <li className='circles-list__el' onClick={handleListClick}>świadectwo dojrzałości,</li>
                            <li className='circles-list__el' onClick={handleListClick}>przesłanie formularza Rekrutacji on-line lub podania na druku Uczelni z deklaracją specjalności [pobierz],</li>
                            <li className='circles-list__el' onClick={handleListClick}>2 fotografie o wymiarach 35x45 mm (jedna elektroniczna, format jpg)</li>
                            <li className='circles-list__el' onClick={handleListClick}>dowód osobisty (do wglądu),</li>
                            <li className='circles-list__el' onClick={handleListClick}>kserokopia wniesienia opłaty rekrutacyjnej.</li>
                        </ul>
                    }
                </div>
                <div className='circles1-right' id='secondCircle1'/>
                <div className='circles2-left' id='firstCircle2' onClick={handleCircleClick}>
                    {circleData.secondActive === false
                        ? 'Formularz rekrutacyjny'
                        : 'Zmiana'
                    }

                </div>
                <div className='circles2-right ' id='secondCircle2'/>
                <div className='circles3-left' id='firstCircle3' onClick={handleCircleClick}>
                    {circleData.thirdActive === false
                        ? 'Terminy'
                        : 'Zmiana'
                    }
                </div>
                <div className='circles3-right' id='secondCircle3'/>
                <div className='circles4-left' id='firstCircle4' onClick={handleCircleClick}>
                    {circleData.thirdActive === false
                        ? 'Opłaty'
                        : 'Zmiana'
                    }
                </div>
                <div className='circles4-right' id='secondCircle4'/>
                <div className='circles5-left' id='firstCircle5' onClick={handleCircleClick}>
                    {circleData.fifthActive === false
                        ? 'Zasady'
                        : 'Zmiana'
                    }
                </div>
                <div className='circles5-right' id='secondCircle5'/>
            </div>


        </div>
    )
}

const Test = () => <p>Dupa</p>


export default AnimatedInfo;

export { Test }