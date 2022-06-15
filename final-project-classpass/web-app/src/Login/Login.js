import { instance } from './../utilities/AxiosConfig';
import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';
import Header from "../HomePage/Header";

class Login extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
    }

    // login button clicked
    onSubmit = event => {
        event.preventDefault()
        var pr = instance.post('/Login', {
            username: this.username.value,
            password: this.password.value
        });
        pr.then((response) => {
            const token = response.data.token;
            localStorage.setItem('jwtToken',token)

                      console.log(response.data.Status);
                      if (response.data.Status === "Success") {
                          console.log(response.data)
                        //   alert("successful Logged in");
                          this.props.history.push("/dashboard");
                      } else if (response.data.Status === "Failed") {
                          alert("Invalid Username and Password");
                      }
                  })
    }


    render (){



    return (


        <div className='container'>
        <Header/>
        <main >
          <div className = "login-feature">
          <div className = "login-content"> 
          < div className = "login-form">
          <h3>Log In</h3>
          <label for="email">Username</label>
          <input id="username" ref={input => this.username = input}  className="form-control" type="text" required />
          <label for="password">Password</label>
          <input id="password" ref={input => this.password = input} className="form-control" type="text" required />
          {/* checking if the login is successfull or not */}
          <button onClick={this.onSubmit} className = "login-btn">Log In</button>
        </div>
        </div>
        </div>
        <div>
        </div>
        </main>
      </div>

        );
    }
}

export default withRouter(Login);