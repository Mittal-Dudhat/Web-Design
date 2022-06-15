import React,{Component} from "react";
import { connect } from "react-redux";
import { instance } from './../utilities/AxiosConfig'
import './registerClass.scss';
import DashboardHeader  from './DashboardHeader';
import Dashfooter from './Dashfooter';


class registerClass extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      classData: [],
      user:[]
    };
  }


  componentDidMount(){
    // get user registration data
    var pr = instance.post('/classes/getUserRegisteredClass', {
      loggedInUser: this.props.user
    });
    pr.then((response) => {
      if(response.data.Status === "Success")
      {
        this.setState({classData: response.data.data.classData,user : this.props.user});
      }
      else{
        alert("No Data Found");
      }
      
    })
  }

  //delete registered class from user
  removeData = (rowData, user) =>{
      var pr = instance.post('/classes/removeUserRegistration', {
          classes: rowData,
          username: user.username
      });
      pr.then((response) => {
          console.log(response.data.Status);
          if (response.data.Status == "Success") {
              alert(response.data.msg);
              this.setState({classData: response.data.data.classData,user : this.props.user});
          } else {
              alert(response.data.msg);
          }
      })
    }

  render(){
  return (
      <div className="registeredmaindiv">
        <DashboardHeader/>
              <h1><center>My Registered classes</center></h1>
              <table className="tblregistered" cellPadding="2" cellSpacing="2">    
                      <thead>
                          <tr className = "green-background">
                              <th>Title</th>
                              <th>From Date</th>
                              <th>To Date</th>
                              <th>Slot</th>
                              <th>Contact</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {this.state.classData.map((object,index)=>(
                            <tr id={index}>
                              <td>{object.title}</td>
                              <td>{object.fromDate}</td>
                              <td>{object.toDate}</td>
                              <td>{object.slot}</td>
                              <td>{object.contact}</td>
                              <td className = "red"><a onClick={() => this.removeData(object, this.state.user)}>Delete</a></td>
                            </tr>
                             ))
                          }
                      </tbody>
                  </table>
          </div>

  )}
}

const mapStateToProps = state => {
  console.log("state is  ", state);
  return {
      user: state.user
  };
};

const fn = connect(mapStateToProps);
export default fn(registerClass);
