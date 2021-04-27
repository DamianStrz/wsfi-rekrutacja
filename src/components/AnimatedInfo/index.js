import React, {useState} from 'react';


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

        const firstCircle1 = document.getElementById('firstCircle1');
        const firstCircle2 = document.getElementById('firstCircle2');
        const firstCircle3 = document.getElementById('firstCircle3');
        const firstCircle4 = document.getElementById('firstCircle4');
        const firstCircle5 = document.getElementById('firstCircle5');


        if (e.target.id === 'firstCircle1') {
            e.target.classList.toggle('active');
            e.target.classList.remove('inactive');

            const rightCircles = document.querySelectorAll(`[id^="secondCircle"]`)

            rightCircles.forEach((el => el.classList.toggle('inactive')));

            document.getElementById('firstCircle2').classList.remove('active');
            document.getElementById('firstCircle3').classList.remove('active');
            document.getElementById('firstCircle4').classList.remove('active');
            document.getElementById('firstCircle5').classList.remove('active');

            document.getElementById('firstCircle2').classList.remove('inactive');
            document.getElementById('firstCircle3').classList.remove('inactive');
            document.getElementById('firstCircle4').classList.remove('inactive');
            document.getElementById('firstCircle5').classList.remove('inactive');

            if (e.target.classList.contains('active')) {

                document.getElementById('firstCircle2').classList.add('inactive');
                document.getElementById('firstCircle3').classList.add('inactive');
                document.getElementById('firstCircle4').classList.add('inactive');
                document.getElementById('firstCircle5').classList.add('inactive');
            }

            setCircleData({...circleData, firstActive: !circleData.firstActive});

        } else if (e.target.id === 'firstCircle2') {
            e.target.classList.toggle('active');
            e.target.classList.remove('inactive');


            const rightCircles = document.querySelectorAll(`[id^="secondCircle"]`)

            rightCircles.forEach((el => el.classList.toggle('inactive')));

            document.getElementById('firstCircle1').classList.remove('active');
            document.getElementById('firstCircle3').classList.remove('active');
            document.getElementById('firstCircle4').classList.remove('active');
            document.getElementById('firstCircle5').classList.remove('active');

            document.getElementById('firstCircle1').classList.remove('inactive');
            document.getElementById('firstCircle3').classList.remove('inactive');
            document.getElementById('firstCircle4').classList.remove('inactive');
            document.getElementById('firstCircle5').classList.remove('inactive');

            if (e.target.classList.contains('active')) {

                document.getElementById('firstCircle1').classList.add('inactive');
                document.getElementById('firstCircle3').classList.add('inactive');
                document.getElementById('firstCircle4').classList.add('inactive');
                document.getElementById('firstCircle5').classList.add('inactive');
            }

            setCircleData({...circleData,
                firstActive: false,
                secondActive: !circleData.secondActive,
                thirdActive: false,
                fourthActive: false,
                fifthActive: false
            });

        } else if (e.target.id === 'firstCircle3') {
            e.target.classList.toggle('active');
            e.target.classList.remove('inactive');

            const rightCircles = document.querySelectorAll(`[id^="secondCircle"]`)

            rightCircles.forEach((el => el.classList.toggle('inactive')));

            document.getElementById('firstCircle1').classList.remove('active');
            document.getElementById('firstCircle2').classList.remove('active');
            document.getElementById('firstCircle4').classList.remove('active');
            document.getElementById('firstCircle5').classList.remove('active');

            document.getElementById('firstCircle1').classList.remove('inactive');
            document.getElementById('firstCircle2').classList.remove('inactive');
            document.getElementById('firstCircle4').classList.remove('inactive');
            document.getElementById('firstCircle5').classList.remove('inactive');

            if (e.target.classList.contains('active')) {

                document.getElementById('firstCircle1').classList.add('inactive');
                document.getElementById('firstCircle2').classList.add('inactive');
                document.getElementById('firstCircle4').classList.add('inactive');
                document.getElementById('firstCircle5').classList.add('inactive');
            }

            setCircleData({...circleData,
                firstActive: false,
                secondActive: false,
                thirdActive: !circleData.thirdActive,
                fourthActive: false,
                fifthActive: false
            });

        } else if (e.target.id === 'firstCircle4') {
            e.target.classList.toggle('active');
            e.target.classList.remove('inactive');

            const rightCircles = document.querySelectorAll(`[id^="secondCircle"]`)

            rightCircles.forEach((el => el.classList.toggle('inactive')));

            document.getElementById('firstCircle1').classList.remove('active');
            document.getElementById('firstCircle2').classList.remove('active');
            document.getElementById('firstCircle3').classList.remove('active');
            document.getElementById('firstCircle5').classList.remove('active');

            document.getElementById('firstCircle1').classList.remove('inactive');
            document.getElementById('firstCircle2').classList.remove('inactive');
            document.getElementById('firstCircle3').classList.remove('inactive');
            document.getElementById('firstCircle5').classList.remove('inactive');

            if (e.target.classList.contains('active')) {

                document.getElementById('firstCircle1').classList.add('inactive');
                document.getElementById('firstCircle2').classList.add('inactive');
                document.getElementById('firstCircle3').classList.add('inactive');
                document.getElementById('firstCircle5').classList.add('inactive');
            }

            setCircleData({...circleData,
                firstActive: false,
                secondActive: false,
                thirdActive: false,
                fourthActive: !circleData.fourthActive,
                fifthActive: false
            });

        } else if (e.target.id === 'firstCircle5') {

            e.target.classList.toggle('active');
            e.target.classList.remove('inactive');

            const rightCircles = document.querySelectorAll(`[id^="secondCircle"]`)

            rightCircles.forEach((el => el.classList.toggle('inactive')));

            document.getElementById('firstCircle1').classList.remove('active');
            document.getElementById('firstCircle2').classList.remove('active');
            document.getElementById('firstCircle3').classList.remove('active');
            document.getElementById('firstCircle4').classList.remove('active');

            document.getElementById('firstCircle1').classList.remove('inactive');
            document.getElementById('firstCircle2').classList.remove('inactive');
            document.getElementById('firstCircle3').classList.remove('inactive');
            document.getElementById('firstCircle4').classList.remove('inactive');

            if (e.target.classList.contains('active')) {

                document.getElementById('firstCircle1').classList.add('inactive');
                document.getElementById('firstCircle2').classList.add('inactive');
                document.getElementById('firstCircle3').classList.add('inactive');
                document.getElementById('firstCircle4').classList.add('inactive');
            }

            setCircleData({...circleData,

                firstActive: false,
                secondActive: false,
                thirdActive: false,
                fourthActive: false,
                fifthActive: !circleData.fifthActive
            });

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
                        : <a className='applicationFormLink' href="../../files/formularz.txt" download>Pobierz formularz</a>
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
                    {circleData.fourthActive === false
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