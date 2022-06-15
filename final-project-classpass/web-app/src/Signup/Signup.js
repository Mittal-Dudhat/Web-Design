import { instance } from './../utilities/AxiosConfig';
import React from 'react';
import './Signup.scss';
import logo from '../images/loginlogo.png';
import signinicon from '../images/SignupLady.jpg';
import {NavLink} from 'react-router-dom';

import { Redirect } from 'react-router-dom';




class Signup extends React.Component {

    constructor(props){
        super(props);
    }

    userObj = {};

    // add new user to db on submit click
    onSubmit = event => {
        event.preventDefault()
        // this.setState({ sendingEmail: true })
        var pr = instance.post('/signup', {
            username: this.username.value,
            password: this.password.value,
            email: this.email.value
        });
        pr.then((response) => {
            this.props.history.push('/Login');
        })
    }


    render (){



    return (
        <div>
        {/* <Header/> */}
        <div className="signup-feature">
        <div className="flexbox-containersignup">
                <div className="flexbox-signup1">
                     <img className="image-signupicon" src={signinicon} alt="signupicon logo" width="50%" />
                </div>
                <div className="flexbox-signup2">

                <div className="containersi signup">
                <img className="signup-img-logo" src={logo} alt="Classpass logo" />
                <form
                         onSubmit={this.onSubmit}
                        ref={form => this.form = form} className="signup-form">



                 

                    <h3 className="title-styling">INTRODUCE YOURSELF</h3>
                    <label htmlFor="">Hi there! My name is</label>

                    <input id="username" ref={input => this.username = input}  className="form-control" type="text" required /><br></br>

                    <label htmlFor="">Here’s my email address: </label>

                    <input
                        type='email'
                        name='email'
                        ref={input => this.email = input} className="form-control"
                        required
                    /><br></br>

                    <label htmlFor="">And here’s my password:  </label>

                    <input id="password" ref={input => this.password = input}
                        className="form-control" type="text" required /><br></br>
                         {/* <NavLink to = "/Login"><button className = "loginBtn">Get in touch with us</button></NavLink> */}
               

                        <button type='submit' className='btn' >Sign me up!</button>
                </form>
            </div>


                </div>


        </div>







            {/* <div className="containersi signup">
                <img className="signup-img-logo" src={logo} alt="Classpass logo" />
                <form
                         onSubmit={this.onSubmit}
                        ref={form => this.form = form} className="signup-form">

                    <h3 className="title-styling">INTRODUCE YOURSELF</h3>
                    <label htmlFor="">Hi there! My name is</label>

                    <input id="username" ref={input => this.username = input}  className="form-control" type="text" required /><br></br>

                    <label htmlFor="">Here’s my email address: </label>

                    <input
                        type='email'
                        name='email'
                        ref={input => this.email = input} className="form-control"
                        required
                    /><br></br>

                    <label htmlFor="">And here’s my password:  </label>

                    <input id="password" ref={input => this.password = input}
                        className="form-control" type="text" required /><br></br>
                         {/* <NavLink to = "/Login"><button className = "loginBtn">Get in touch with us</button></NavLink> */}
               

                        {/* <button type='submit' className='btn' >Sign me up!</button>
                </form>
            </div> */} 
            
        </div>
       
        </div>
        );
    }
}

export default Signup;
