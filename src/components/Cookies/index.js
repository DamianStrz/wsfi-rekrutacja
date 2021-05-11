import React, {useState} from 'react';

import {cookiesContent} from "./cookiesContent";


const Cookies = () => {

    const [open, setOpen] = useState(true);


    const closeCookies = () => {
        setOpen(!open);
        console.log(open)
    }

    return (
        <>
            {open && <div className='cookies'>
                <div className='cookies-content'>
                    <div className='cookies-text'>{cookiesContent}</div>
                    <div className='cookies-buttons'>
                        <button className='cookies-btn1' type='button' onClick={closeCookies}>Ackeptuję</button>
                        <a
                            href='https://www.google.pl/'
                            className='cookies-btn2'
                            rel='noopener noreferrer'>
                            Wychodzę
                        </a>
                    </div>
                </div>
            </div>}
        </>
    )
}


export default Cookies;