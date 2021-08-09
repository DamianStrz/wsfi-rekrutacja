import React, {useState} from 'react';

const Slider = () => {

    const data = {
        titleBoxOne: 'Rachunkowość i finanse',
        imgTitleBoxOne: "Rachunkowość i finanse",
        textBoxOne: 'Specjalność ta przeznaczona jest dla osób, które w przyszłości planują swoją karierę m.in. w działach księgowości, finansowych, na stanowiskach menedżerskich oraz dla prowadzących własną działalność biznesową. Na danej specjalności student uczy się jak uzyskać odpowiednie dane opisujące sytuację przedsiębiorstwa, jak je analizować oraz nabywa umiejętności interpretowania otrzymanych wyników. Daje to podstawy do podejmowania trafnych decyzji biznesowych. Na ostatnim roku studiów do wyboru są dwie specjalizacje: Kadry i płace oraz Podatki w przedsiębiorstwie.',
        linkBoxOne: 'https://wsfi.edu.pl/files/rachunkowosc_i_finanse_program.pdf',
        linkBoxOneTitle: 'Program studiów: ',
        linkBoxOneText: 'sprawdź',
        titleBoxTwo: 'Bankowość i ubezpieczenia',
        imgTitleBoxTwo: "Bankowość i ubezpieczenia",
        textBoxTwo: 'Bankowość i ubezpieczenia to studia dla przyszłych pracowników banków i instytucji ubezpieczeniowych oraz osób chcących prowadzić własną działalność na rynku dystrybucji produktów bankowych i ubezpieczeniowych jako agenci czy brokerzy. Adresatem są też osoby, które cechuje kreatywność w pracy i umiejętności zarządzania ryzykiem oraz wysoka umiejętność nawiązywania kontaktów z odbiorcami produktów finansowych. Studenci tej specjalności zdobywają wiedzę z zakresu podstawowych produktów bankowych i ubezpieczeniowych, ryzyka w ich alokacji oraz organizacji i znaczenia sektora bankowego i ubezpieczeniowego w gospodarce i funkcjonowaniu podmiotów gospodarczych. Zajęcia prowadzone są przez doświadczonych wykładowców oraz w dużej części przez praktyków z bankowości i ubezpieczeń.',
        linkBoxTwo: 'https://wsfi.edu.pl/files/bankowosc_i_ubezpieczenia_program.pdf',
        linkBoxTwoTitle: 'Program studiów: ',
        linkBoxTwoText: 'sprawdź',
        titleBoxThree: 'Prowadzenie biznesu w UE',
        imgTitleBoxThree: 'Prowadzenie biznesu w UE',
        textBoxThree: 'Studia Prowadzenie biznesu w UE przygotowują studentów do pełnienia aktywnej roli w gospodarce w ramach prowadzenia przez nich własnych firm. Studia te mają charakter wybitnie praktyczny: uczą jak zaprojektować i uruchomić działalność gospodarczą, jak pozyskać środki na jej rozwój oraz jak kalkulować jej efektywność. Dodatkowo budują świadomość i postawy niezbędne do pełnienia roli przedsiębiorcy. Specjalność Prowadzenie biznesu w UE uwzględnia także aspekt międzynarodowy prowadzenia działalności. Prowadzenie biznesu w UE to studia dla przyszłych biznesmenów prowadzących własną działalność gospodarczą, nawiązujących kontakty międzynarodowe. Adresatem są osoby chcące przekuć swój zapał i pracowitość we własną działalność biznesową.',
        linkBoxThree: 'https://wsfi.edu.pl/files/prowadzenie_biznesu_w_ue_program.pdf',
        linkBoxThreeTitle: 'Program studiów: ',
        linkBoxThreeText: 'sprawdź',
        titleBoxFour: 'Kadry i płace',
        imgTitleBoxTFour: 'Kadry i płące',
        textBoxFour: 'Kadry i płace to studia przygotowujące do jednego z najbardziej poszukiwanych zawodów na rynku pracy. Obsługa kadrowo-płacowa jest najważniejszym elementem oferty każdego zespołu księgowego. Dlatego specjaliści z tego zakresu są od lat bardzo poszukiwani przez pracodawców. Studia Kadry i płace na naszej Uczelni przygotowują ekspertów na najwyższym poziomie. Od lat jesteśmy liderem w kształceniu kadr księgowych. Studia Kadry i płace zainteresują przede wszystkim osoby wiążące swoją przyszłość z karierą w księgowości i finansach oraz osoby aspirujące do stanowisk kierowniczych.',
        linkBoxFour: 'https://wsfi.edu.pl/files/kadry_i_place_program.pdf',
        linkBoxFourTitle: 'Program studiów: ',
        linkBoxFourText: 'sprawdź',
        titleBoxFive: 'Gospodarowanie nieruchomościami',
        imgTitleBoxFive: 'Gospodarowanie nieruchomościami',
        textBoxFive: 'Studia Gospodarowanie nieruchomościami odpowiadają na potrzebę kształcenia specjalistów zajmujących się obrotem i zarządzaniem nieruchomościami. To obecnie jeden z najszybciej rozwijających się obszarów gospodarki. Na studiach Gospodarowanie nieruchomościami studenci poznają m.in. sposoby wycen nieruchomości, nabywają umiejętności tworzenia ofert sprzedażowych. Absolwenci potrafią w pełni samodzielnie prowadzić działalność na rynku nieruchomości. Studia Gospodarowanie nieruchomościami skierowane są do osób, które swoją karierę zawodową wiążą z branżą obrotu i zarządzaniem nieruchomościami, chcą poznać tajniki robienia biznesu na rynku mieszkaniowym oraz nabyć ekonomiczne podstawy projektów budowy i sprzedaży mieszkań i osiedli.',
        linkBoxFive: 'https://wsfi.edu.pl/files/gospodarowanie_nieruchomosciami_program.pdf',
        linkBoxFiveTitle: 'Program studiów: ',
        linkBoxFiveText: 'sprawdź',
    }

    const [slideData, setSlideData] = useState({
        isActive: false,
    })

    const handleColorChange = (e) => {


        (e.target.id === 'box-one' && slideData.isActive === false) && setSlideData({
            ...slideData,
            isActive: !slideData.isActive,
            imgTitle: data.imgTitleBoxOne,
            title: data.titleBoxOne,
            text: data.textBoxOne,
            link: data.linkBoxOne,
            linkTitle: data.linkBoxOneTitle,
            linkText: data.linkBoxOneText,
            box: e.target.id
        });

        (e.target.id === 'box-one' && slideData.isActive === true) && setSlideData({
            ...slideData,
            imgTitle: data.imgTitleBoxOne,
            title: data.titleBoxOne,
            text: data.textBoxOne,
            link: data.linkBoxOne,
            linkTitle: data.linkBoxOneTitle,
            linkText: data.linkBoxOneText,
            box: e.target.id
        });


        (e.target.id === 'box-two' && slideData.isActive === false) && setSlideData({
            ...slideData,
            isActive: !slideData.isActive,
            imgTitle: data.imgTitleBoxTwo,
            title: data.titleBoxTwo,
            text: data.textBoxTwo,
            link: data.linkBoxTwo,
            linkTitle: data.linkBoxTwoTitle,
            linkText: data.linkBoxTwoText,
            box: e.target.id
        });

        (e.target.id === 'box-two' && slideData.isActive === true) && setSlideData({
            ...slideData,
            imgTitle: data.imgTitleBoxTwo,
            title: data.titleBoxTwo,
            text: data.textBoxTwo,
            link: data.linkBoxTwo,
            linkTitle: data.linkBoxTwoTitle,
            linkText: data.linkBoxTwoText,
            box: e.target.id
        });

        (e.target.id === 'box-three' && slideData.isActive === false) && setSlideData({
            ...slideData,
            isActive: !slideData.isActive,
            imgTitle: data.imgTitleBoxThree,
            title: data.titleBoxThree,
            text: data.textBoxThree,
            link: data.linkBoxThree,
            linkTitle: data.linkBoxThreeTitle,
            linkText: data.linkBoxThreeText,
            box: e.target.id
        });

        (e.target.id === 'box-three' && slideData.isActive === true) && setSlideData({
            ...slideData,
            imgTitle: data.imgTitleBoxThree,
            title: data.titleBoxThree,
            text: data.textBoxThree,
            link: data.linkBoxThree,
            linkTitle: data.linkBoxThreeTitle,
            linkText: data.linkBoxThreeText,
            box: e.target.id
        });

        (e.target.id === 'box-four' && slideData.isActive === false) && setSlideData({
            ...slideData,
            isActive: !slideData.isActive,
            imgTitle: data.imgTitleBoxFour,
            title: data.titleBoxFour,
            text: data.textBoxFour,
            link: data.linkBoxFour,
            linkTitle: data.linkBoxFourTitle,
            linkText: data.linkBoxFourText,
            box: e.target.id
        });

        (e.target.id === 'box-four' && slideData.isActive === true) && setSlideData({
            ...slideData,
            imgTitle: data.imgTitleBoxFour,
            title: data.titleBoxFour,
            text: data.textBoxFour,
            link: data.linkBoxFour,
            linkTitle: data.linkBoxFourTitle,
            linkText: data.linkBoxFourText,
            box: e.target.id
        });

        (e.target.id === 'box-five' && slideData.isActive === false) && setSlideData({
            ...slideData,
            isActive: !slideData.isActive,
            imgTitle: data.imgTitleBoxFive,
            title: data.titleBoxFive,
            text: data.textBoxFive,
            link: data.linkBoxFive,
            linkTitle: data.linkBoxFiveTitle,
            linkText: data.linkBoxFiveText,
            box: e.target.id
        });

        (e.target.id === 'box-five' && slideData.isActive === true) && setSlideData({
            ...slideData,
            imgTitle: data.imgTitleBoxFive,
            title: data.titleBoxFive,
            text: data.textBoxFive,
            link: data.linkBoxFive,
            linkTitle: data.linkBoxFiveTitle,
            linkText: data.linkBoxFiveText,
            box: e.target.id
        });


        e.target.id === 'slide' && setSlideData({...slideData, isActive: !slideData.isActive,});


        e.stopPropagation();


    }

    return(

        <div className='container slider'>
            <h1 className='slider-title'>Specjalności na kierunku Ekonomia <span className='online'>on-line</span></h1>
            <div className='slider-boxes'>
                <div className='slider-boxes__box box1' onClick={handleColorChange} id='box-one'>
                    <span className='slider-boxes__text'>Rachunkowość i finanse</span>
                </div>
                <div className='slider-boxes__box box2' onClick={handleColorChange} id='box-two'>
                    <span className='slider-boxes__text'>Bankowość i ubezpieczenia</span>
                </div>
                <div className='slider-boxes__box box3' onClick={handleColorChange} id='box-three'>
                    <span className='slider-boxes__text'>Prowadzenie biznesu w UE</span>
                </div>
                <div className='slider-boxes__box box4' onClick={handleColorChange} id='box-four'>
                    <span className='slider-boxes__text'>Kadry i płace</span>
                </div>
                <div className='slider-boxes__box box5' onClick={handleColorChange} id='box-five'>
                    <span className='slider-boxes__text'>Gospodarowanie nieruchomościami</span>
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
                <div>
                    <h3 className='slide-content__title'>{slideData.title}</h3>
                    <p className='slide-content__text'>{slideData.text}</p>
                    <p className='slide-content__link-title'>{slideData.linkTitle}
                        <a href={slideData.link} className='slide-content__link' target='_blank' rel='noopener noreferrer'>
                            {slideData.linkText}</a>
                    </p>
                    <i className="fa fa-angle-up"></i>
                </div>
            </div>
        </div>
    )
}

export default Slider;