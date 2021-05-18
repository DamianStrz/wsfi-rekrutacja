import React, { useState } from "react";


const Popup = () => {

    const [isOpen, setIsOpen] = useState(sessionStorage.getItem("popupIsOpen"));

    const handleClose = () => {
        sessionStorage.setItem("popupIsOpen", "false");
        setIsOpen(sessionStorage.getItem("popupIsOpen"));

        console.log(isOpen);

    }

    return (
        <>
            {isOpen !== "false" &&
                <div className='popup'>
                    <div className='popup-close' onClick={handleClose}>
                        <i className="fa fa-close"></i>
                    </div>
                    <div className='popup-box'>
                        <h1 className='popup-title'>Daj się wkręcić w studia on-line!</h1>
                    </div>
                </div>
            }
        </>
    )
}

export default Popup;