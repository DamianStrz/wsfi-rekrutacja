import React, {useState} from 'react';

const Slider = () => {

    const data = {
        titleBoxOne: 'Kierunek ekonomia, specjalność: Rachunkowość i finanse',
        imgTitleBoxOne: "Rachunkowość i finanse",
        textBoxOne: 'Specjalność ta przeznaczona jest dla osób, które w przyszłości planują swoją karierę m.in. w działach księgowości, finansowych, na stanowiskach menedżerskich oraz dla prowadzących własną działalność biznesową. Na danej specjalności student uczy się jak uzyskać odpowiednie dane opisujące sytuację przedsiębiorstwa, jak je analizować oraz nabywa umiejętności interpretowania otrzymanych wyników. Daje to podstawy do podejmowania trafnych decyzji biznesowych. Na ostatnim roku studiów do wyboru są dwie specjalizacje: Kadry i płace oraz Podatki w przedsiębiorstwie.',
        linkBoxOne: 'https://wsfi.edu.pl/files/rachunkowosc_i_finanse_program.pdf',
        linkBoxOneTitle: 'Program studiów: ',
        linkBoxOneText: 'sprawdź',
        titleBoxTwo: 'Kierunek ekonomia, specjalność: Bankowość',
        imgTitleBoxTwo: "Bankowość",
        textBoxTwo: 'Bankowość i ubezpieczenia to studia dla przyszłych pracowników banków i instytucji ubezpieczeniowych oraz osób chcących prowadzić własną działalność na rynku dystrybucji produktów bankowych i ubezpieczeniowych jako agenci czy brokerzy. Adresatem są też osoby, które cechuje kreatywność w pracy i umiejętności zarządzania ryzykiem oraz wysoka umiejętność nawiązywania kontaktów z odbiorcami produktów finansowych. Studenci tej specjalności zdobywają wiedzę z zakresu podstawowych produktów bankowych i ubezpieczeniowych, ryzyka w ich alokacji oraz organizacji i znaczenia sektora bankowego i ubezpieczeniowego w gospodarce i funkcjonowaniu podmiotów gospodarczych. Zajęcia prowadzone są przez doświadczonych wykładowców oraz w dużej części przez praktyków z bankowości i ubezpieczeń.',
        linkBoxTwo: 'https://wsfi.edu.pl/files/bankowosc_i_ubezpieczenia_program.pdf',
        linkBoxTwoTitle: 'Program studiów: ',
        linkBoxTwoText: 'sprawdź',
        titleBoxThree: 'Kierunek ekonomia, specjalność: Przedsiębiorczość',
        imgTitleBoxThree: "Przedsiębiorczość",
        textBoxThree: 'Przedsiębiorczość dostarcza studentom szeroką wiedzę pozwalającą zaprojektować i uruchomić własną firmę, a także realizować się na polu handlowca/sprzedawcy. WSFI w ostatnich latach współuczestniczyła w założeniu kilkuset mikroprzedsiębiorstw. Nasi wykładowcy i eksperci służyli radą i wsparciem na etapie rejestracji działalności, jak i pierwszych miesięcy funkcjonowania. Zdobytą wiedzą i doświadczeniem dzielimy się z naszymi studentami. W ramach specjalności Przedsiębiorczość studenci mogą wybrać jedną z dwóch ścieżek specjalizacyjnych: \n 1. Organizacja i rozwój firmy \n 2. Menedżer sprzedaży',
        linkBoxThree: 'https://wsfi.edu.pl/files/przedsiebiorczosc_program.pdf',
        linkBoxThreeTitle: 'Program studiów: ',
        linkBoxThreeText: 'sprawdź',
    }

    const [slideData, setSlideData] = useState({
        isActive: false,
    })

    const handleColorChange = (e) => {


        (e.target.id === 'box-one' && slideData.isActive === false) && setSlideData({...slideData,
            isActive: !slideData.isActive,
            imgTitle: data.imgTitleBoxOne,
            title: data.titleBoxOne,
            text: data.textBoxOne,
            link: data.linkBoxOne,
            linkTitle: data.linkBoxOneTitle,
            linkText: data.linkBoxOneText,
            box: e.target.id
        });

        (e.target.id === 'box-one' && slideData.isActive === true) && setSlideData({...slideData,
            imgTitle: data.imgTitleBoxOne,
            title: data.titleBoxOne,
            text: data.textBoxOne,
            link: data.linkBoxOne,
            linkTitle: data.linkBoxOneTitle,
            linkText: data.linkBoxOneText,
            box: e.target.id
        });


        (e.target.id === 'box-two' && slideData.isActive === false) && setSlideData({...slideData,
            isActive: !slideData.isActive,
            imgTitle: data.imgTitleBoxTwo,
            title: data.titleBoxTwo,
            text: data.textBoxTwo,
            link: data.linkBoxTwo,
            linkTitle: data.linkBoxTwoTitle,
            linkText: data.linkBoxTwoText,
            box: e.target.id
        });

        (e.target.id === 'box-two' && slideData.isActive === true) && setSlideData({...slideData,
            imgTitle: data.imgTitleBoxTwo,
            title: data.titleBoxTwo,
            text: data.textBoxTwo,
            link: data.linkBoxTwo,
            linkTitle: data.linkBoxTwoTitle,
            linkText: data.linkBoxTwoText,
            box: e.target.id
        });

        (e.target.id === 'box-three' && slideData.isActive === false) && setSlideData({...slideData,
            isActive: !slideData.isActive,
            imgTitle: data.imgTitleBoxThree,
            title: data.titleBoxThree,
            text: data.textBoxThree,
            link: data.linkBoxThree,
            linkTitle: data.linkBoxThreeTitle,
            linkText: data.linkBoxThreeText,
            box: e.target.id
        });

        (e.target.id === 'box-three' && slideData.isActive === true) && setSlideData({...slideData,
            imgTitle: data.imgTitleBoxThree,
            title: data.titleBoxThree,
            text: data.textBoxThree,
            link: data.linkBoxThree,
            linkTitle: data.linkBoxThreeTitle,
            linkText: data.linkBoxThreeText,
            box: e.target.id
        });

        e.target.id === 'slide' && setSlideData({...slideData,isActive: !slideData.isActive,});


        e.stopPropagation();



    }




    return(

        <div className='container slider'>
            <h1 className='slider-title'>Specjalności na kierunku Ekonomia on-line</h1>
            <div className='slider-boxes'>
                <div className='slider-boxes__box box1' onClick={handleColorChange} id='box-one'>
                    <span className='slider-boxes__text'>Rachunkowość i finanse</span>
                </div>
                <div className='slider-boxes__box box2' onClick={handleColorChange} id='box-two'>
                    <span className='slider-boxes__text'>Bankowość</span>
                </div>
                <div className='slider-boxes__box box3' onClick={handleColorChange} id='box-three'>
                    <span className='slider-boxes__text'>Przedsiębiorczość</span>
                </div>
            </div>
            {slideData.isActive && <SlideContent isActive={slideData.isActive} slideData={slideData} onClick={handleColorChange}/>}
        </div>
    )
}

const SlideContent = ({slideData,onClick}) => {

    return(
        <div className='slide' onClick={onClick}>
            <div className='slide-content' id='slide' >
                <div className={`slide-content__img ${slideData.box}`} >{slideData.imgTitle}</div>
                <div>
                    <h3 className='slide-content__title'>{slideData.title}</h3>
                    <p className='slide-content__text'>{slideData.text}</p>
                    <p className='slide-content__link-title'>{slideData.linkTitle}
                        <a href={slideData.link} className='slide-content__link' target='_blank' rel='noopener noreferrer'>
                            {slideData.linkText}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Slider;