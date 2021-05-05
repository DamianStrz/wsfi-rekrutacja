import React, {useState} from 'react';

const AnimatedInfo = () => {


    // const [active, setActive] = useState(false)

    const recruitmentForm = 'https://dziekanat.wsfi.pl/formularz-rekrutacyjny'

    const [circleData, setCircleData] = useState({
        firstActive: false,
        secondActive: false,
        thirdActive: false,
        fourthActive: false,
        fifthActive: false,
    })


    const handleCircleClick = (e) => {

        const firstCircle1 = document.getElementById('firstCircle1');
        const firstCircle2 = document.getElementById('firstCircle2');
        const firstCircle3 = document.getElementById('firstCircle3');
        const firstCircle4 = document.getElementById('firstCircle4');
        const firstCircle5 = document.getElementById('firstCircle5');


        if (e.target.id === 'firstCircle1') {
            e.target.classList.toggle('active');
            firstCircle1.classList.contains('inactive2') &&
                firstCircle1.classList.remove('inactive2');

            firstCircle1.classList.contains('inactive3') &&
                firstCircle1.classList.remove('inactive3');

            firstCircle1.classList.contains('inactive4') &&
                firstCircle1.classList.remove('inactive4');

            firstCircle1.classList.contains('inactive5') &&
                firstCircle1.classList.remove('inactive5');

            const rightCircles = document.querySelectorAll(`[id^="secondCircle"]`)

            rightCircles.forEach((el => el.classList.remove('inactive')));

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

                rightCircles.forEach((el => el.classList.add('inactive')));
            }

            setCircleData({...circleData,
                firstActive: !circleData.firstActive,
                secondActive: false,
                thirdActive: false,
                fourthActive: false,
                fifthActive: false,

            });

        } else if (e.target.id === 'firstCircle2') {
            e.target.classList.toggle('active');
            e.target.classList.remove('inactive');


            const rightCircles = document.querySelectorAll(`[id^="secondCircle"]`)

            rightCircles.forEach((el => el.classList.remove('inactive')));

            document.getElementById('firstCircle1').classList.remove('active');
            document.getElementById('firstCircle3').classList.remove('active');
            document.getElementById('firstCircle4').classList.remove('active');
            document.getElementById('firstCircle5').classList.remove('active');

            document.getElementById('firstCircle1').classList.remove('inactive2');
            document.getElementById('firstCircle1').classList.remove('inactive3');
            document.getElementById('firstCircle1').classList.remove('inactive4');
            document.getElementById('firstCircle1').classList.remove('inactive5');


            if (e.target.classList.contains('active')) {

                document.getElementById('firstCircle1').classList.add('inactive2');
                document.getElementById('firstCircle3').classList.add('inactive');
                document.getElementById('firstCircle4').classList.add('inactive');
                document.getElementById('firstCircle5').classList.add('inactive');

                rightCircles.forEach((el => el.classList.add('inactive')));
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

            rightCircles.forEach((el => el.classList.remove('inactive')));

            document.getElementById('firstCircle1').classList.remove('active');
            document.getElementById('firstCircle2').classList.remove('active');
            document.getElementById('firstCircle4').classList.remove('active');
            document.getElementById('firstCircle5').classList.remove('active');

            document.getElementById('firstCircle1').classList.remove('inactive3');
            document.getElementById('firstCircle1').classList.remove('inactive4');
            document.getElementById('firstCircle1').classList.remove('inactive5');
            document.getElementById('firstCircle1').classList.remove('inactive2');


            document.getElementById('firstCircle2').classList.remove('inactive');
            document.getElementById('firstCircle4').classList.remove('inactive');
            document.getElementById('firstCircle5').classList.remove('inactive');

            if (e.target.classList.contains('active')) {

                document.getElementById('firstCircle1').classList.add('inactive3');
                document.getElementById('firstCircle2').classList.add('inactive');
                document.getElementById('firstCircle4').classList.add('inactive');
                document.getElementById('firstCircle5').classList.add('inactive');

                rightCircles.forEach((el => el.classList.add('inactive')));

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

            rightCircles.forEach((el => el.classList.remove('inactive')));

            document.getElementById('firstCircle1').classList.remove('active');
            document.getElementById('firstCircle2').classList.remove('active');
            document.getElementById('firstCircle3').classList.remove('active');
            document.getElementById('firstCircle5').classList.remove('active');

            document.getElementById('firstCircle1').classList.remove('inactive4');
            document.getElementById('firstCircle1').classList.remove('inactive5');
            document.getElementById('firstCircle1').classList.remove('inactive2');
            document.getElementById('firstCircle1').classList.remove('inactive3');



            document.getElementById('firstCircle2').classList.remove('inactive');
            document.getElementById('firstCircle3').classList.remove('inactive');
            document.getElementById('firstCircle5').classList.remove('inactive');

            if (e.target.classList.contains('active')) {

                document.getElementById('firstCircle1').classList.add('inactive4');
                document.getElementById('firstCircle2').classList.add('inactive');
                document.getElementById('firstCircle3').classList.add('inactive');
                document.getElementById('firstCircle5').classList.add('inactive');


                rightCircles.forEach((el => el.classList.add('inactive')));
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

            rightCircles.forEach((el => el.classList.remove('inactive')));

            document.getElementById('firstCircle1').classList.remove('active');
            document.getElementById('firstCircle2').classList.remove('active');
            document.getElementById('firstCircle3').classList.remove('active');
            document.getElementById('firstCircle4').classList.remove('active');

            document.getElementById('firstCircle1').classList.remove('inactive5');
            document.getElementById('firstCircle1').classList.remove('inactive2');
            document.getElementById('firstCircle1').classList.remove('inactive3');
            document.getElementById('firstCircle1').classList.remove('inactive4');



            document.getElementById('firstCircle2').classList.remove('inactive');
            document.getElementById('firstCircle3').classList.remove('inactive');
            document.getElementById('firstCircle4').classList.remove('inactive');

            if (e.target.classList.contains('active')) {

                document.getElementById('firstCircle1').classList.add('inactive5');
                document.getElementById('firstCircle2').classList.add('inactive');
                document.getElementById('firstCircle3').classList.add('inactive');
                document.getElementById('firstCircle4').classList.add('inactive');

                rightCircles.forEach((el => el.classList.add('inactive')));
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
                        ? 'Dokumenty'
                        : <div className='circles-text'>
                            <ul className='circles-list' onClick={handleListClick}>
                                <li className='circles-list__el' onClick={handleListClick}>Świadectwo dojrzałości,</li>
                                <li className='circles-list__el' onClick={handleListClick}>Przesłanie formularza Rekrutacji <span className='online'>on-line</span> [przejdź],</li>
                                <li className='circles-list__el' onClick={handleListClick}>2 fotografie (35x45 mm, jedna elektroniczna, format jpg)</li>
                                <li className='circles-list__el' onClick={handleListClick}>Dowód osobisty (do wglądu),</li>
                                <li className='circles-list__el' onClick={handleListClick}>Kserokopia wniesienia opłaty rekrutacyjnej.</li>
                            </ul>
                            <h3>Dokumenty należy składać osobiście lub przesłać listem poleconym:</h3>
                            <p>ŁÓDŹ, 93-587 ul. Wróblewskiego 18/801 (8 piętro, "Urbanica"), tel: 42
639 91 10, 501 016 524, e-mail: dziekanat@wsfi.pl</p>
                            <p>KALISZ, 62-800 ul. Widok 96a (budynek IV LO), tel: 62 753 56 53, 501
016 529, e-mail: kalisz@wsfi.pl</p>
                            <p>Można także przesłać skan podpisanych dokumentów (oryginały należy dostarczyć osobiście lub listem poleconym w terminie
14 dni).</p>
                            </div>
                    }
                </div>
                <div className='circles1-right' id='secondCircle1'/>
                <div className='circles2-left' id='firstCircle2' onClick={handleCircleClick}>
                    {circleData.secondActive === false
                        ? 'Formularz rekrutacyjny'
                        : <a className='applicationFormLink'
                             href={recruitmentForm}
                             target='_blank'
                             rel='noopener noreferrer'>Przejdź do formularza rekrutacji <span className='online'>on-line</span></a>
                    }

                </div>
                <div className='circles2-right ' id='secondCircle2'/>
                <div className='circles3-left' id='firstCircle3' onClick={handleCircleClick}>
                    {circleData.thirdActive === false
                        ? 'Terminy'
                        : <p className='circle-calendar'>Rekrutacja rusza od 1 czerwca 2021r.</p>
                    }
                </div>
                <div className='circles3-right' id='secondCircle3'/>
                <div className='circles4-left' id='firstCircle4' onClick={handleCircleClick}>
                    {circleData.fourthActive === false
                        ? 'Opłaty'
                        : <Fee/>
                    }
                </div>
                <div className='circles4-right' id='secondCircle4'/>
                <div className='circles5-left' id='firstCircle5' onClick={handleCircleClick}>
                    {circleData.fifthActive === false
                        ? 'Zasady'
                        : <p className='circles-five'>Zmiana</p>
                    }
                </div>
                <div className='circles5-right' id='secondCircle5'/>
            </div>


        </div>
    )
}

const Fee = () => {

    return(
        <>
            <div className='circles-fees'>
                <h2>KOSZTY REKRUTACJI:</h2>
                <p>85zł - opłata rekrutacyjna</p>
                <p>350zł - wpisowe</p>
                <p>Opłatę rekrutacyjną prosimy wpłacać na konto(PKO BP S.A. 1 O/Łódź): 80 1020 3352 0000 1102 0010 5684</p>
            </div>
            <table className='circles-table'>
                <thead className='circles-table__header'>
                <tr className='circles-table__header--row'>
                    <th className='circles-table__header--col1'>Rekrutacja 2021/22</th>
                    <th className='circles-table__header--col2'>Czesne (studia <span className='online'>on-line</span>)</th>
                </tr>
                </thead>
                <tbody>
                <tr className='circles-table__header--row'>
                    <td className='circles-table__header--col1'>I rok studiów</td>
                    <td className='circles-table__header--col2'>350 zł miesięcznie (płatne 12 miesięcy)</td>
                </tr>
                <tr className='circles-table__header--row'>
                    <td className='circles-table__header--col1'>I rok studiów</td>
                    <td className='circles-table__header--col2'>385 zł miesięcznie (płatne 12 miesięcy)</td>
                </tr>
                <tr className='circles-table__header--row'>
                    <td className='circles-table__header--col1'>I rok studiów</td>
                    <td className='circles-table__header--col2'>475 zł miesięcznie (płatne 10 miesięcy)</td>
                </tr>
                </tbody>
            </table>

        </>


    )
}




export default AnimatedInfo;