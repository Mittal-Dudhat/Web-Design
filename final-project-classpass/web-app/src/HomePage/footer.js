import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Header.scss"
import "./footer.scss"

import facebook from './../images/facebook.png'
import twitter from './../images/twitter.png'
import instagram from './../images/instagram.png'
import telegram from './../images/telegram.png'

const footer = (props)=>{
    return (
        <div className='footer'>
            <div className='about'>
                <div>
                    <NavLink to="/AboutUs">About Us</NavLink>
                </div>
                <div>
                    <NavLink to="/Faq">FAQ</NavLink>
                </div>
                <div>
                    <NavLink to="/team">Team</NavLink>
                </div>
                <div>
                    <NavLink to="/Feedback">Feedback</NavLink>
                </div>
            </div>

            <div className="social-media">
                <a href="https://www.facebook.com/"><img src={facebook} alt="facebook" /></a>
                <a href="https://twitter.com/"><img src={twitter} alt="twitter" /></a>
                <a href="https://www.instagram.com/"><img src={instagram} alt="instagram" /></a>
                <a href="https://telegram.org/"><img src={telegram} alt="telegram" /></a>
            </div>
        </div>

    )
}

export default footer;