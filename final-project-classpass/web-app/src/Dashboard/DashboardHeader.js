import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { instance } from './../utilities/AxiosConfig'
import profile from './../images/person-profile.png';
import "./DashboardHeader.scss";

let openForm = () =>{
  document.getElementById("openForm").style.display = "block";
}

let closeForm = () =>{
  document.getElementById("openForm").style.display = "none";
}
// function to update the profile
let updateProfile = (props) =>{
  if (props.user.username == undefined || props.user.password == undefined || props.user.email == undefined) {
      alert("form is Incomplete");
  }
  else {
      var pr = instance.post('/updateUser/'+`${props.user._id}`, props.user);
      pr.then((response) => {
          console.log(response.data.Status);
          if (response.data.Status == "Success") {
              alert("updated successfully");
          } else if (response.data.Status == "Failed") {
              alert("username or Email Id Already exist");
          }
      })
  }
}
// function to display dash header
const DashHeader = (props) => {
  return (
    <nav className="DashNav fixedTop">
      <span className="landing-name">C L A S S P A S S</span>

        <NavLink to="/dashboard" className="menu">Home</NavLink>

        <NavLink to="/registerClass" className="menu">My Class</NavLink>
      <div className="Dash-float">
        <NavLink to="/"><button className="logout-btn" onClick={() => {
          localStorage.removeItem('jwtToken');
        }
        }>Log Out</button></NavLink>
        <button className="profileBtn">
          <img className="profile" src={profile} alt="" srcset="" />
        </button>
        <NavLink to="/dashboard"><label htmlFor=""  onClick={() => { openForm(props);}}  className="landing-name">{props.user.username}</label></NavLink>
        <div id = "openForm">
        <div className="friendPopup">
        <div className="frnd-content">
          <div className="frnd-header">
            <span>My profile Details</span>
          </div>
          <label className= "lblBlack">Name</label>
          <input id="username" 
            onChange={(event) => {
              props.user.username  = event.target.value;
            }} 
            defaultValue ={props.user.username} 
            placeholder="Name"
            className="frnd-name" 
            type="text" />
          <label className= "lblBlack">Email</label>
          <input id="email" 
            onChange={(event) => {
              props.user.email = event.target.value;
            } }
            defaultValue ={props.user.email} disabled
            placeholder= "Password" 
            className="frnd-name" 
            type="text"/>
          <label className= "lblBlack">Change Password</label>
          <input
            id="password"
            onChange={(event) => {
              props.user.password = event.target.value;
           }}
           defaultValue ={props.user.password} 
           placeholder="Password"
            className="frnd-name"
            type="password"
          />
          <div className="pop-btn">
            <button className="btn Add"
              onClick={() => { updateProfile(props);}}
            >
              Update Profile
            </button>
            <button className="btn cut" onClick={() => { closeForm(props);}}>
              Close
            </button>
          </div>
        </div>
      </div>
        </div>
        
      </div>
    </nav>
  )
}


const mapStateToProps = state => {
  console.log("state is  ", state);
  return {
    user: state.user
  };
};

const fn = connect(mapStateToProps);
export default fn(DashHeader);