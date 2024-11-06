import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" className='logo' />
                <h1>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</h1>

                <div className="footer__contact">
                    <h2>+998 (99) 999-99-99</h2>
                    <p>Вы можете связатся с этим номером</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Footer