import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Header.scss"

const Header = (props)=>{
    return (
        <nav className = "landingNav fixed-top">
            <div>
                <span className='heading'><h3 className = "landing-name">C L A S S P A S S</h3></span>
        
                <div className='loginDiv'>
                    <NavLink to = "/Login"><button className = "loginBtn">Log In</button></NavLink>
                    <NavLink to = "/signup"><button className = "SignUp">Sign Up</button></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;