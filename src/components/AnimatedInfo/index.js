import React, {useEffect, useState} from 'react';

const AnimatedInfo = () => {

    const recruitmentForm = 'https://dziekanat.wsfi.pl/formularz-rekrutacyjny'

    let circle = 0;

    const [circleData, setCircleData] = useState({
        firstActive: false,
        secondActive: false,
        thirdActive: false,
        fourthActive: false,
        fifthActive: false,
        whichIsActive: circle,
        counter: 0,
        circleOneData: 1
    })

    const handleCircleClick = (e) => {

       const firstCircle1 = document.getElementById('firstCircle1');
       const firstCircle2 = document.getElementById('firstCircle2');
       const firstCircle3 = document.getElementById('firstCircle3');
       const firstCircle4 = document.getElementById('firstCircle4');
       const firstCircle5 = document.getElementById('firstCircle5');

        //kółka zmieniają się miejscami

        e.target.classList.add('active');

        setCircleData(prevState => ({...prevState, clicked: true, number: e.target.dataset.circle}))

        localStorage.setItem('number',e.target.dataset.circle);

        if (e.target.dataset.circle === "1" && !circleData.clicked) {

            setCircleData(prevState => ({...prevState, firstActive: true}))

            firstCircle2.classList.toggle("inactive2")
            firstCircle3.classList.toggle("inactive3")
            firstCircle4.classList.toggle("inactive4")
            firstCircle5.classList.toggle("inactive5")

            document.getElementById('secondCircle1').classList.toggle('inactive');
            document.getElementById('secondCircle2').classList.toggle('inactive');
            document.getElementById('secondCircle3').classList.toggle('inactive');
            document.getElementById('secondCircle4').classList.toggle('inactive');
            document.getElementById('secondCircle5').classList.toggle('inactive');

        }

        if (e.target.dataset.circle === "2" && !circleData.clicked) {
            setCircleData(prevState => ({...prevState,
                secondActive: true,
                circleOneData: e.target.dataset.circle
            }))

            firstCircle1.classList.toggle("inactive2")
            firstCircle3.classList.toggle("inactive3")
            firstCircle4.classList.toggle("inactive4")
            firstCircle5.classList.toggle("inactive5")

            document.getElementById('secondCircle1').classList.toggle('inactive');
            document.getElementById('secondCircle2').classList.toggle('inactive');
            document.getElementById('secondCircle3').classList.toggle('inactive');
            document.getElementById('secondCircle4').classList.toggle('inactive');
            document.getElementById('secondCircle5').classList.toggle('inactive');

        }

        if (e.target.dataset.circle === "3" && !circleData.clicked) {
            setCircleData(prevState => ({...prevState,
                thirdActive: true,
                circleOneData: e.target.dataset.circle

            }))

            firstCircle1.classList.toggle("inactive2")
            firstCircle2.classList.toggle("inactive3")
            firstCircle4.classList.toggle("inactive4")
            firstCircle5.classList.toggle("inactive5")

            document.getElementById('secondCircle1').classList.toggle('inactive');
            document.getElementById('secondCircle2').classList.toggle('inactive');
            document.getElementById('secondCircle3').classList.toggle('inactive');
            document.getElementById('secondCircle4').classList.toggle('inactive');
            document.getElementById('secondCircle5').classList.toggle('inactive');

        }

        if (e.target.dataset.circle === "4" && !circleData.clicked) {
            setCircleData(prevState => ({...prevState,
                fourthActive: true,
                circleOneData: e.target.dataset.circle

            }))

            firstCircle1.classList.toggle("inactive2")
            firstCircle2.classList.toggle("inactive3")
            firstCircle3.classList.toggle("inactive4")
            firstCircle5.classList.toggle("inactive5")

            document.getElementById('secondCircle1').classList.toggle('inactive');
            document.getElementById('secondCircle2').classList.toggle('inactive');
            document.getElementById('secondCircle3').classList.toggle('inactive');
            document.getElementById('secondCircle4').classList.toggle('inactive');
            document.getElementById('secondCircle5').classList.toggle('inactive');

        }

        if (e.target.dataset.circle === "5" && !circleData.clicked) {
            setCircleData(prevState => ({...prevState,
                fifthActive: true,
                circleOneData: e.target.dataset.circle

            }))

            firstCircle1.classList.toggle("inactive2")
            firstCircle2.classList.toggle("inactive3")
            firstCircle3.classList.toggle("inactive4")
            firstCircle4.classList.toggle("inactive5")

            document.getElementById('secondCircle1').classList.toggle('inactive');
            document.getElementById('secondCircle2').classList.toggle('inactive');
            document.getElementById('secondCircle3').classList.toggle('inactive');
            document.getElementById('secondCircle4').classList.toggle('inactive');
            document.getElementById('secondCircle5').classList.toggle('inactive');
        }


        if (e.currentTarget.id === "firstCircle1" && circleData.clicked) {

            setCircleData(prevState =>{
                const number = localStorage.getItem("number");
                return {...prevState,
                    firstActive: true,
                    secondActive: false,
                    thirdActive: false,
                    fourthActive: false,
                    fifthActive: false,
                    circleOneData: number
                }
            });


            e.target.classList.remove("inactive2");
            e.target.classList.remove("inactive3");
            e.target.classList.remove("inactive4");
            e.target.classList.remove("inactive5");

            firstCircle2.classList.add("inactive2");
            firstCircle2.classList.remove("inactive3");
            firstCircle2.classList.remove("inactive4");
            firstCircle2.classList.remove("inactive5");

            firstCircle3.classList.add("inactive3");
            firstCircle3.classList.remove("inactive2");
            firstCircle3.classList.remove("inactive4");
            firstCircle3.classList.remove("inactive5");

            firstCircle4.classList.add("inactive4");
            firstCircle4.classList.remove("inactive2");
            firstCircle4.classList.remove("inactive3");
            firstCircle4.classList.remove("inactive5");

            firstCircle5.classList.add("inactive5");
            firstCircle5.classList.remove("inactive2");
            firstCircle5.classList.remove("inactive3");
            firstCircle5.classList.remove("inactive4");

            firstCircle2.classList.remove("active");
            firstCircle3.classList.remove("active");
            firstCircle4.classList.remove("active");
            firstCircle5.classList.remove("active");

            document.getElementById('secondCircle1').classList.add('inactive');
            document.getElementById('secondCircle2').classList.add('inactive');
            document.getElementById('secondCircle3').classList.add('inactive');
            document.getElementById('secondCircle4').classList.add('inactive');
            document.getElementById('secondCircle5').classList.add('inactive');


        }

        if (e.currentTarget.id === "firstCircle2" && circleData.clicked) {

            const number = localStorage.getItem("number");

            setCircleData(prevState => ({...prevState,
                firstActive: false,
                secondActive: true,
                thirdActive: false,
                fourthActive: false,
                fifthActive: false,
                circleOneData: number
            }))

            e.target.classList.remove("inactive2");
            e.target.classList.remove("inactive3");
            e.target.classList.remove("inactive4");
            e.target.classList.remove("inactive5");

            firstCircle1.classList.add(`inactive2`);

            firstCircle1.classList.remove("inactive3");
            firstCircle1.classList.remove("inactive4");
            firstCircle1.classList.remove("inactive5");

            firstCircle3.classList.add("inactive3");
            firstCircle3.classList.remove("inactive2");
            firstCircle3.classList.remove("inactive4");
            firstCircle3.classList.remove("inactive5");

            firstCircle4.classList.add("inactive4")
            firstCircle4.classList.remove("inactive2")
            firstCircle4.classList.remove("inactive3")
            firstCircle4.classList.remove("inactive5")

            firstCircle5.classList.add("inactive5")
            firstCircle5.classList.remove("inactive2")
            firstCircle5.classList.remove("inactive3")
            firstCircle5.classList.remove("inactive4")

            firstCircle1.classList.remove("active")
            firstCircle3.classList.remove("active")
            firstCircle4.classList.remove("active")
            firstCircle5.classList.remove("active")

            document.getElementById('secondCircle1').classList.add('inactive');
            document.getElementById('secondCircle2').classList.add('inactive');
            document.getElementById('secondCircle3').classList.add('inactive');
            document.getElementById('secondCircle4').classList.add('inactive');
            document.getElementById('secondCircle5').classList.add('inactive');
        }

        if (e.currentTarget.id === "firstCircle3" && circleData.clicked) {

            const number = localStorage.getItem("number");

            setCircleData(prevState => ({...prevState,
                firstActive: false,
                secondActive: false,
                thirdActive: true,
                fourthActive: false,
                fifthActive: false,
                circleOneData: number

            }))

            e.target.classList.remove("inactive2");
            e.target.classList.remove("inactive3");
            e.target.classList.remove("inactive4");
            e.target.classList.remove("inactive5");

            firstCircle1.classList.add("inactive3");
            firstCircle1.classList.remove("inactive2");
            firstCircle1.classList.remove("inactive4");
            firstCircle1.classList.remove("inactive5");

            firstCircle2.classList.add("inactive2");
            firstCircle2.classList.remove("inactive3");
            firstCircle2.classList.remove("inactive4");
            firstCircle2.classList.remove("inactive5");

            firstCircle4.classList.add("inactive4")
            firstCircle4.classList.remove("inactive2")
            firstCircle4.classList.remove("inactive3")
            firstCircle4.classList.remove("inactive5")

            firstCircle5.classList.add("inactive5")
            firstCircle5.classList.remove("inactive2")
            firstCircle5.classList.remove("inactive3")
            firstCircle5.classList.remove("inactive4")

            firstCircle1.classList.remove("active")
            firstCircle2.classList.remove("active")
            firstCircle4.classList.remove("active")
            firstCircle5.classList.remove("active")

            document.getElementById('secondCircle1').classList.add('inactive');
            document.getElementById('secondCircle2').classList.add('inactive');
            document.getElementById('secondCircle3').classList.add('inactive');
            document.getElementById('secondCircle4').classList.add('inactive');
            document.getElementById('secondCircle5').classList.add('inactive');


        }

        if (e.currentTarget.id === "firstCircle4" && circleData.clicked) {
            const number = localStorage.getItem("number");

            setCircleData(prevState => ({...prevState,
                firstActive: false,
                secondActive: false,
                thirdActive: false,
                fourthActive: true,
                fifthActive: false,
                circleOneData: number


            }))

            e.target.classList.remove("inactive2");
            e.target.classList.remove("inactive3");
            e.target.classList.remove("inactive4");
            e.target.classList.remove("inactive5");

            firstCircle1.classList.remove("inactive3");
            firstCircle1.classList.remove("inactive2");
            firstCircle1.classList.remove("inactive5");
            firstCircle1.classList.add("inactive4");


            firstCircle2.classList.remove("inactive2");
            firstCircle2.classList.remove("inactive3");
            firstCircle2.classList.remove("inactive5");
            firstCircle2.classList.add("inactive2");


            firstCircle3.classList.remove("inactive2")
            firstCircle3.classList.remove("inactive3")
            firstCircle3.classList.remove("inactive4")
            firstCircle3.classList.add("inactive3")


            firstCircle5.classList.remove("inactive2")
            firstCircle5.classList.remove("inactive3")
            firstCircle5.classList.remove("inactive4")
            firstCircle5.classList.add("inactive5")

            firstCircle1.classList.remove("active")
            firstCircle2.classList.remove("active")
            firstCircle3.classList.remove("active")
            firstCircle5.classList.remove("active")

            document.getElementById('secondCircle1').classList.add('inactive');
            document.getElementById('secondCircle2').classList.add('inactive');
            document.getElementById('secondCircle3').classList.add('inactive');
            document.getElementById('secondCircle4').classList.add('inactive');
            document.getElementById('secondCircle5').classList.add('inactive');

        }

        if (e.currentTarget.id === "firstCircle5" && circleData.clicked) {

            const number = localStorage.getItem("number");

            setCircleData(prevState => ({...prevState,
                firstActive: false,
                secondActive: false,
                thirdActive: false,
                fourthActive: false,
                fifthActive: true,
                circleOneData: number

            }))

            e.target.classList.remove("inactive2");
            e.target.classList.remove("inactive3");
            e.target.classList.remove("inactive4");
            e.target.classList.remove("inactive5");

            firstCircle1.classList.remove("inactive3");
            firstCircle1.classList.remove("inactive4");
            firstCircle1.classList.remove("inactive2");
            firstCircle1.classList.add("inactive5");

            firstCircle2.classList.remove("inactive3");
            firstCircle2.classList.remove("inactive4");
            firstCircle2.classList.remove("inactive5");
            firstCircle2.classList.add("inactive2");


            firstCircle3.classList.remove("inactive2")
            firstCircle3.classList.remove("inactive4")
            firstCircle3.classList.remove("inactive5")
            firstCircle3.classList.add("inactive3")


            firstCircle4.classList.remove("inactive5")
            firstCircle4.classList.remove("inactive3")
            firstCircle4.classList.remove("inactive2")
            firstCircle4.classList.add("inactive4")

            firstCircle1.classList.remove("active")
            firstCircle2.classList.remove("active")
            firstCircle3.classList.remove("active")
            firstCircle4.classList.remove("active")

            document.getElementById('secondCircle1').classList.add('inactive');
            document.getElementById('secondCircle2').classList.add('inactive');
            document.getElementById('secondCircle3').classList.add('inactive');
            document.getElementById('secondCircle4').classList.add('inactive');
            document.getElementById('secondCircle5').classList.add('inactive');

        }

        e.stopPropagation();

    }
        const handleListClick = (e) => {

        if (circleData.firstActive === true) {

            setCircleData({...circleData, firstActive: true});

            document.getElementById('firstCircle1').classList.add('active');

            document.getElementById('secondCircle1').classList.add('inactive');
            document.getElementById('secondCircle2').classList.add('inactive');
            document.getElementById('secondCircle3').classList.add('inactive');
            document.getElementById('secondCircle4').classList.add('inactive');
            document.getElementById('secondCircle5').classList.add('inactive');

            document.getElementById('firstCircle2').classList.add('inactive2');
            document.getElementById('firstCircle3').classList.add('inactive3');
            document.getElementById('firstCircle4').classList.add('inactive4');
            document.getElementById('firstCircle5').classList.add('inactive5');

        } else if (circleData.secondActive === true) {
            setCircleData({...circleData, secondActive: true});

            document.getElementById('firstCircle2').classList.add('active');

            document.getElementById('secondCircle1').classList.add('inactive');
            document.getElementById('secondCircle2').classList.add('inactive');
            document.getElementById('secondCircle3').classList.add('inactive');
            document.getElementById('secondCircle4').classList.add('inactive');
            document.getElementById('secondCircle5').classList.add('inactive');

            document.getElementById('firstCircle1').classList.add('inactive2');
            document.getElementById('firstCircle3').classList.add('inactive3');
            document.getElementById('firstCircle4').classList.add('inactive4');
            document.getElementById('firstCircle5').classList.add('inactive5');

        } else if (circleData.thirdActive === true) {
            setCircleData({...circleData, thirdActive: true});

            document.getElementById('firstCircle3').classList.add('active');

            document.getElementById('secondCircle1').classList.add('inactive');
            document.getElementById('secondCircle2').classList.add('inactive');
            document.getElementById('secondCircle3').classList.add('inactive');
            document.getElementById('secondCircle4').classList.add('inactive');
            document.getElementById('secondCircle5').classList.add('inactive');

            document.getElementById('firstCircle1').classList.add('inactive3');
            document.getElementById('firstCircle2').classList.add('inactive2');
            document.getElementById('firstCircle4').classList.add('inactive4');
            document.getElementById('firstCircle5').classList.add('inactive5');

        } else if (circleData.fourthActive === true) {
            setCircleData({...circleData, fourthActive: true});
            document.getElementById('firstCircle4').classList.add('active');

            document.getElementById('secondCircle1').classList.add('inactive');
            document.getElementById('secondCircle2').classList.add('inactive');
            document.getElementById('secondCircle3').classList.add('inactive');
            document.getElementById('secondCircle4').classList.add('inactive');
            document.getElementById('secondCircle5').classList.add('inactive');

            document.getElementById('firstCircle1').classList.add('inactive4');
            document.getElementById('firstCircle2').classList.add('inactive2');
            document.getElementById('firstCircle3').classList.add('inactive3');
            document.getElementById('firstCircle5').classList.add('inactive5');

        } if (circleData.fifthActive === true) {
                setCircleData({...circleData, fifthActive: true});

                document.getElementById('firstCircle5').classList.add('active');

                document.getElementById('secondCircle1').classList.add('inactive');
                document.getElementById('secondCircle2').classList.add('inactive');
                document.getElementById('secondCircle3').classList.add('inactive');
                document.getElementById('secondCircle4').classList.add('inactive');
                document.getElementById('secondCircle5').classList.add('inactive');

                document.getElementById('firstCircle1').classList.add('inactive5');
                document.getElementById('firstCircle2').classList.add('inactive2');
                document.getElementById('firstCircle3').classList.add('inactive3');
                document.getElementById('firstCircle4').classList.add('inactive4');


            }
            e.stopPropagation();

        }


    return (
        <div className='container circles'>
            <h1 className='circles-title'>Zasady rekrutacji</h1>
            <div className='circles-field'>
                <div className='circles1-left' id='firstCircle1' data-circle={circleData.circleOneData} onClick={handleCircleClick}>
                    {circleData.firstActive === false
                        ? 'Dokumenty'
                        : <div className='circles-text'>
                            <ul className='circles-list' onClick={handleListClick}>
                                <li className='circles-list__el' onClick={handleListClick}>Świadectwo dojrzałości,
                                </li>
                                <li className='circles-list__el' onClick={handleListClick}>Przesłanie formularza
                                    Rekrutacji <span className='online'>on-line</span> [przejdź],
                                </li>
                                <li className='circles-list__el' onClick={handleListClick}>2 fotografie (35x45 mm,
                                    jedna elektroniczna, format jpg)
                                </li>
                                <li className='circles-list__el' onClick={handleListClick}>Dowód osobisty (do
                                    wglądu),
                                </li>
                                <li className='circles-list__el' onClick={handleListClick}>Kserokopia wniesienia
                                    opłaty rekrutacyjnej.
                                </li>
                            </ul>
                            <h3>Dokumenty należy składać osobiście lub przesłać listem poleconym:</h3>
                            <p>ŁÓDŹ, 93-587 ul. Wróblewskiego 18/801 (8 piętro, "Urbanica"), tel: 42
                                639 91 10, 501 016 524, e-mail: dziekanat@wsfi.pl</p>
                            <p>KALISZ, 62-800 ul. Widok 96a (budynek IV LO), tel: 62 753 56 53, 501
                                016 529, e-mail: kalisz@wsfi.pl</p>
                            <p>Można także przesłać skan podpisanych dokumentów (oryginały należy dostarczyć
                                osobiście lub listem poleconym w terminie
                                14 dni).</p>
                        </div>
                    }
                </div>
                <div className='circles1-right' id='secondCircle1'/>
                <div className='circles2-left' id='firstCircle2' data-circle={2} onClick={handleCircleClick}>
                    {circleData.secondActive === false
                        ? 'Formularz rekrutacyjny'
                        : <a className='applicationFormLink'
                             href={recruitmentForm}
                             target='_blank'
                             rel='noopener noreferrer'>Przejdź do formularza rekrutacji <span
                            className='online'>on-line</span></a>
                    }

                </div>
                <div className='circles2-right ' id='secondCircle2' />
                <div className='circles3-left' id='firstCircle3' data-circle={3} onClick={handleCircleClick}>
                    {circleData.thirdActive === false
                        ? 'Terminy'
                        : <p onClick={handleListClick} className='circle-calendar'>Rekrutacja rusza od 1 czerwca 2021r.</p>
                    }
                </div>
                <div className='circles3-right' id='secondCircle3'/>
                <div className='circles4-left' id='firstCircle4' data-circle={4} onClick={handleCircleClick}>
                    {circleData.fourthActive === false
                        ? 'Opłaty'
                        : <Fee onClick={handleListClick}/>
                    }
                </div>
                <div className='circles4-right' id='secondCircle4'/>
                <div className='circles5-left' id='firstCircle5' data-circle={5} onClick={handleCircleClick}>
                    {circleData.fifthActive === false
                        ? 'Zasady'
                        : <p onClick={handleListClick} className='circles-five'>Zmiana</p>
                    }
                </div>
                <div className='circles5-right' id='secondCircle5'/>
            </div>


        </div>
    )
}


const Fee = ({onClick}) => {

    return (
        <>
            <div className='circles-fees' onClick={onClick}>
                <h2>KOSZTY REKRUTACJI:</h2>
                <p>85zł - opłata rekrutacyjna</p>
                <p>350zł - wpisowe</p>
                <p>Opłatę rekrutacyjną prosimy wpłacać na konto(PKO BP S.A. 1 O/Łódź): <strong>80 1020 3352 0000
                        1102 0010 5684</strong></p>
            </div>
            <table className='circles-table' onClick={onClick}>
                <thead className='circles-table__header'>
                    <tr className='circles-table__header--row'>
                        <th className='circles-table__header--col1'>Rekrutacja 2021/22</th>
                        <th className='circles-table__header--col2'>Czesne (studia <span
                            className='online'>on-line</span>)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='circles-table__header--row'>
                        <td className='circles-table__header--col1'>I rok studiów</td>
                        <td className='circles-table__header--col2'>350 zł miesięcznie (płatne 12 miesięcy)</td>
                    </tr>
                    <tr className='circles-table__header--row'>
                        <td className='circles-table__header--col1'>II rok studiów</td>
                        <td className='circles-table__header--col2'>385 zł miesięcznie (płatne 12 miesięcy)</td>
                    </tr>
                    <tr className='circles-table__header--row'>
                        <td className='circles-table__header--col1'>III rok studiów</td>
                        <td className='circles-table__header--col2'>475 zł miesięcznie (płatne 10 miesięcy)</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}


export default AnimatedInfo;