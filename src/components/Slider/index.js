import React, {useState, useEffect} from 'react';

const Slider = () => {

    const [slideData, setSlideData] = useState({
        isActive: false,
        title: 'Kierunek ekonomia, specjalność: Rachunkowość i finanse',
        imgTitle: "Rachunkowość i finanse",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id molestias nostrum quidem rerum sequi suscipit veritatis? Cum iure, quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id molestias nostrum quidem rerum sequi suscipit veritatis? Cum iure, quam?'
    })

    const handleColorChange = (e) => {
        setSlideData({...slideData, isActive: !slideData.isActive})

        e.stopPropagation();
    }


    return(

        <div className='container slider'>
            <h1 className='slider-title'>Specjalności na kierunku Ekonomia on-line</h1>
            <div className='slider-boxes'>
                <div className='slider-boxes__box box1' onClick={handleColorChange}>
                    <span className='slider-boxes__text'>Rachunkowość i finanse</span>
                </div>
                <div className='slider-boxes__box box2'>
                    <span className='slider-boxes__text'>Bankowość</span>
                </div>
                <div className='slider-boxes__box box3'>
                    <span className='slider-boxes__text'>Przedsiębiorczość</span>
                </div>
            </div>
            {slideData.isActive && <SlideContent isActive={slideData.isActive} slideData={slideData}/>}
        </div>
    )
}

const SlideContent = ({slideData}) => {


    return(
        <div className='slide' >
            <div className='slide-content'>
                <div className='slide-content__img'>{slideData.imgTitle}</div>
                <div>
                    <h3 className='slide-content__title'>{slideData.title}</h3>
                    <p className='slide-content__text'>{slideData.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Slider;