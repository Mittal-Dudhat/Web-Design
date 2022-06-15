import React from 'react';
import Header  from './Header';
import "./HomePage.scss"
import Slider from './Slider'
import Footer from './footer';
import {NavLink} from 'react-router-dom';

export const HomePage = ()=>{
    return (
        <div className = "landing">

           <Header/>
            
            <section>
                <Slider/>
            </section>
            <div className='chooseClasspass'><h1>Why Choose Classpass?</h1></div>

            <div className="flexbox-container">
                
                
                <div className="flexbox-item1">
                <p>ClassPass is a monthly subscription service that provides you with access to tens of thousands of different studios, gyms, and wellness offerings in over 2,500 cities worldwide. 
                Upon signing up for a ClassPass membership, you receive credits each month, the amount of which will vary depending on your location and membership plan. You use credits to book classes ranging from yoga to barre to cycling to martial arts – the options are endless!
                Get started with a membership here. Different rules and restrictions may apply if you are on a promotion.</p><br></br>
                </div>
                <div className="flexbox-item2">
                    Still need help?<br></br>
                    <NavLink to = "/askQuery"><button className = "loginBtn">Get in touch with us</button></NavLink><br></br><br></br>
                    <NavLink to = "/newsArticle"><button className = "loginBtn">Expert Articles</button></NavLink>
                </div>
            </div>


            {/* <div className='askQuery'>
                <table>
                    <tr>
                        <td><p>ClassPass is a monthly subscription service that provides you with access to tens of thousands of different studios, gyms, and wellness offerings in over 2,500 cities worldwide. 
                Upon signing up for a ClassPass membership, you receive credits each month, the amount of which will vary depending on your location and membership plan. You use credits to book classes ranging from yoga to barre to cycling to martial arts – the options are endless!
                Get started with a membership here. Different rules and restrictions may apply if you are on a promotion.</p></td>
                        <td>Still need help? <br/>
                        <NavLink to = "/Login"><button className = "loginBtn">Get in touch with us</button></NavLink></td>
                    </tr>
                </table>
                
            </div> */}

            <section>
                <Footer/>
            </section>

        </div>
    )
}