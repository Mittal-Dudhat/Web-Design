import { instance } from './../utilities/AxiosConfig';
import React from "react";
import './Feedback.scss';
import { Redirect } from 'react-router-dom';
import spring from '../images/feedback.jpg';



// const Feedback = () => {
    class Feedback extends React.Component {

    constructor(props){
        super(props);
    }

    userObj = {};

    // save data to db on submit click
    onSubmit = event => {
        event.preventDefault()
        var pr = instance.post('/feedback/addFeedback/', {
            fullname: this.fullname.value,
            email: this.email.value,
            feedback: this.feedback.value
        });
        pr.then((response) => {
            alert('Thank you for your feedback');
            this.props.history.push('/');
        })
    }
    render (){


    return (


    <div className="body">
    <div className="section">
    <img src={spring} alt="feedback" width="50%" height="90%" />
    </div>
    <div className="containerfb">
    <form  
         onSubmit={this.onSubmit}  ref={form => this.form = form} >
        <h1>Give your Feedback</h1>
        <div className="id">
            <input type="text" ref={input => this.fullname = input} placeholder="Full name"/>
                <i className="far fa-user"></i>
        </div><br/>
        <div class="id">
            <input type="email" ref={input => this.email = input} placeholder="Email address"/>
                <i className="far fa-envelope"></i>
      </div><br/>
      <textarea cols="15" rows="5" ref={input => this.feedback = input} placeholder="Enter your opinions here"></textarea>
      <button type='submit'>Send</button>


    </form>
    </div>  
    </div>


    

    );
}
}

export default Feedback;