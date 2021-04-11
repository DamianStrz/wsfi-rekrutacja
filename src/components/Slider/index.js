import React, {useState} from 'react';

const Slider = () => {

    const data = {
        titleBoxOne: 'Kierunek ekonomia, specjalność: Rachunkowość i finanse',
        imgTitleBoxOne: "Rachunkowość i finanse",
        textBoxOne: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id molestias nostrum quidem rerum sequi suscipit veritatis? Cum iure, quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id molestias nostrum quidem rerum sequi suscipit veritatis? Cum iure, quam?',
        titleBoxTwo: 'Kierunek ekonomia, specjalność: Bankowość',
        imgTitleBoxTwo: "Bankowość",
        textBoxTwo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id molestias nostrum quidem rerum sequi suscipit veritatis? Cum iure, quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id molestias nostrum quidem rerum sequi suscipit veritatis? Cum iure, quam?',
        titleBoxThree: 'Kierunek ekonomia, specjalność: Przedsiębiorczość',
        imgTitleBoxThree: "Przedsiębiorczość",
        textBoxThree: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id molestias nostrum quidem rerum sequi suscipit veritatis? Cum iure, quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id molestias nostrum quidem rerum sequi suscipit veritatis? Cum iure, quam?'
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
            box: e.target.id
        });

        (e.target.id === 'box-one' && slideData.isActive === true) && setSlideData({...slideData,
            imgTitle: data.imgTitleBoxOne,
            title: data.titleBoxOne,
            text: data.textBoxOne,
            box: e.target.id
        });


        (e.target.id === 'box-two' && slideData.isActive === false) && setSlideData({...slideData,
            isActive: !slideData.isActive,
            imgTitle: data.imgTitleBoxTwo,
            title: data.titleBoxTwo,
            text: data.textBoxTwo,
            box: e.target.id
        });

        (e.target.id === 'box-two' && slideData.isActive === true) && setSlideData({...slideData,
            imgTitle: data.imgTitleBoxTwo,
            title: data.titleBoxTwo,
            text: data.textBoxTwo,
            box: e.target.id
        });

        (e.target.id === 'box-three' && slideData.isActive === false) && setSlideData({...slideData,
            isActive: !slideData.isActive,
            imgTitle: data.imgTitleBoxThree,
            title: data.titleBoxThree,
            text: data.textBoxThree,
            box: e.target.id
        });

        (e.target.id === 'box-three' && slideData.isActive === true) && setSlideData({...slideData,
            imgTitle: data.imgTitleBoxThree,
            title: data.titleBoxThree,
            text: data.textBoxThree,
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
                </div>
            </div>
        </div>
    )
}

export default Slider;