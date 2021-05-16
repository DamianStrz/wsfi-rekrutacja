import React, { useState } from "react";


const Popup = () => {

    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {isOpen &&
                <div className='popup'>
                    <div className='popup-box'>
                        <h1 className='popup-title'>Wejdź w świat studiów online</h1>
                        <div className='popup-close' onClick={handleClose}>
                            <i className="fa fa-check"></i>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Popup;