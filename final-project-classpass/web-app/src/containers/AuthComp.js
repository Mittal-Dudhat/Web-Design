import React from 'react';
import {instance} from './../utilities/AxiosConfig';
import { withRouter } from "react-router-dom";
import {userActionCreator} from "./../redux/actionCreator/userAction";
import { store } from "./../redux/store";

 class AuthComp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user: undefined
        }
    }
    componentWillMount (){
     const jwt = localStorage.getItem('jwtToken');
     if(!jwt){
         this.props.history.push('/Login');
     }
    
     //get user and authentication token
     instance.get('/getUser', {headers : {Authorization: `Bearer ${jwt}`}}).then(res => {
        this.state.user = res.data.userdata.data;
        localStorage.username = res.data.userdata.data.username;
         var user = res.data.userdata.data;
         this.setState({user:user});
         var action = userActionCreator(user,'AddUser');
         store.dispatch(action);
     }).catch(err =>{
         console.log(err);
         localStorage.removeItem('jwtToken');
         this.props.history.push('/Login');
     });
     
    }

    render(){
        {console.log("hello",this.state.user)}
        if(this.state.user === undefined){
            return(
                <div>
                <h1>loading..........</h1>
            </div>
            
            )
        }

        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(AuthComp);