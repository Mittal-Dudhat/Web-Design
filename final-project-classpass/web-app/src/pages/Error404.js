import React from "react";
import './Error.scss';
import errorpg from '../images/404errorpage.png';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
    <>
        <div id="notfound">
        {/* <img className="errorlogo" src={errorpg} alt="errorpg logo" width="100%" height="100%" /> */}
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
                <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </p>
          <Link to='/'>
                <a href="#">Back to Homepage</a>
                </Link>

            </div>
            
        </div>
        </>

    );
};

export default Error404;