import React from 'react'
import Header from './Header';
import Footer from './footer';

import Mital from './../images/Mital.jpeg'
import Mrunal from './../images/Mrunal.jpg'
import Gauri from './../images/Gauri.jpeg'
import teamImage from './../images/team.png'
import "./team.scss"

const team = (props) => {
    return (
        <div className="teamPage">
            <Header />
            <div className='team-div'>
            <div id="container">
                <p className="image-desc">
                    <img src={Mital} alt="Mital" />
                    <img src={Mrunal} alt="Mrunal" />
                    <img src={Gauri} alt="Gauri" />
                </p>

                <div class="box-text">
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;Meet our Teammates</h1>
                </div>
            </div>

            <p>
                <div className="team-members">
                    <table>
                        <tr>
                            <td><li>Mital Dudhat</li></td>
                            <td><li>Mrunal Mahajan</li></td>
                            <td><li>Gauri Pasarkar</li></td>
                        </tr>
                        <tr>
                            <td>MS in Information Systems</td>
                            <td>MS in Information Systems</td>
                            <td>MS in Information Systems</td>
                        </tr>
                        <tr>
                            <td>Northeastern University</td>
                            <td>Northeastern University</td>
                            <td>Northeastern University</td>
                        </tr>
                        <tr>
                            <td>5 Years of experience at Powerweave</td>
                            <td>2 years of experience at Infosys Ltd.</td>
                            <td>7 years of experience at TCS</td>
                        </tr>
                        <tr>
                            <td> Software Private Limited</td>
                        </tr>
                    </table>
                    
                </div>
            </p>
            </div>
            <div className='team-footer'>
                <Footer />
            </div>
        </div>


        )
}

export default team;