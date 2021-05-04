import React, {useState} from 'react';



const Details = () => {

    const [link, setLink] = useState("https://www.wsfi.edu.pl/rekrutacja.html")

    return (
        <div className='container details'>
            {/*<h1>*/}
            {/*    <a className='details-title' href={link} target='_blank' rel='noopener noreferrer'>Studiuj z nami!</a>*/}
            {/*</h1>*/}
            <div className='details-circle1'/>
            <p className='details-title'>Studiuj z nami online!</p>
            <div className='details-circle2'/>
            <div className='details-circle3'/>
            <p className='details-subtitle'>Rekrutacja rusza 1 czerwca!</p>
            <div className='details-circle4'/>
        </div>
    )
}

export default Details