import React, {useState} from 'react';



const Details = () => {

    const [link, setLink] = useState("https://www.wsfi.edu.pl/rekrutacja.html")

    return (
        <div className='container details'>
            <h1>
                <a className='details-title' href={link} target='_blank' rel='noopener noreferrer'>Studiuj z nami!</a>
            </h1>
            <div className='details-circle1'/>
            <div className='details-circle2'/>
            <div className='details-circle3'/>
            <div className='details-circle4'/>
        </div>
    )
}

export default Details