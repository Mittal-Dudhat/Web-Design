import React,{ Component } from 'react';
import { instance } from './../utilities/AxiosConfig';
import "./dashboard.scss";
import DashboardHeader  from './DashboardHeader';
import Dashfooter from './Dashfooter';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './registerClass.scss';
import { connect } from "react-redux";


class dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            classData:'',
            selectedValue: '',
            selectedClass: ''
        };
        this.btnRegisterClicked = this.btnRegisterClicked.bind(this);
        this.input = {};
        this.handleChange = this.handleChange.bind(this);
    }

    //method to set input values
    handleChange = (selectedOption) => {
        this.setState({selectedValue: selectedOption.target.value});
        this.input[selectedOption.target.id] =  selectedOption.target.value;
      };

      // btn save click
      save() {
        instance.post('/classes/addUser',{username:this.props.user.username,title:this.state.selectedClass,user:this.props.user,inp:this.input}).then((resp)=>{
            console.log(resp);
            alert("Registered for "+this.state.selectedClass+" class");
        });
      }

    componentDidMount(){
    //Method to get all data on page load
     var pr = instance.get('/classes/getAllClassData/');
        pr.then((response) => {
          if (response.data.Status == "Success") {
              console.log(response.data);
              this.setState({data: response.data.record })
          } else if (response.data.Status == "Fail") {
              alert("No Class Found");
          }
        })
    }

    // btn register click
    btnRegisterClicked=(title)=>{
        document.getElementById("openRegForm").style.display = "block";
        this.setState({selectedClass: title })
    }

    //close registration pop up
    closeRegForm = (prop) =>{
        document.getElementById("openRegForm").style.display = "none";
        document.getElementById("fromDate").value="";
        document.getElementById("toDate").value="";
        document.getElementById("contact").value="";
        this.setState({selectedValue:""});
      }
   
    render(){
        return (
            <div className="dashboard">
                <DashboardHeader/>

                <div className='classes-div'>
                <h1>Explore our classes.... Open for Registration</h1>

                { this.state.data !== undefined ? this.state.data.map((classes) =>(
                    <Card>
                        <CardContent>
                            <Typography>
                            <img
                                className={classes.img}
                                src={"./" + `img/${classes.image}`}
                                alt="Profile"
                                style={{ marginTop: "0%",width: "650px",height: "550px", display: "inline-block;" }}
                            ></img>
                            <p className="descriptionPara">
                                <b>Title :</b> {classes.title}<br/>
                                <b>Instructor :</b> {classes.instructor} <br />
                                <b>Description :</b> {classes.description} <br />
                                <button id="register" value="Register" onClick={()=>this.btnRegisterClicked(classes.title)}>Register</button>
                            </p>
                            </Typography>
                        </CardContent>

                    </Card>
                
                
            )) : ''}
                </div>

                <div id = "openRegForm">
                <div className="friendPopup">
                    <div className="frnd-content">
                    <div className="frnd-header">
                        <h3>Register for {this.state.selectedClass}</h3>
                    </div>
                    <div className="exp-inp2">
                        <input
                            id="title"
                            type="text"
                            placeholder="Enter Title"
                            value={this.state.selectedClass}
                            disabled
                        /><br/>
                        <br/>
                        <input   
                            id="fromDate"
                            type="date"
                            onChange={e => {
                                this.input[e.target.id] = e.target.value;
                            }}
                        />
                        <input   
                            id="toDate"
                            type="date"
                            onChange={e => {
                                this.input[e.target.id] = e.target.value;
                            }}
                        />
                        <br/><br/>
                        <select id="slot" value= {this.state.selectedValue} onChange={this.handleChange}>
                            <option value="8am - 10am">8am - 10am</option>
                            <option value="11am - 1pm">11am - 1pm</option>
                            <option value="5pm - 7pm">5pm - 7pm</option>
                        </select>

                        <br/><br/>
                        <input
                            id="contact"
                            type="text"
                            placeholder="Enter Contact"
                            onChange={e => {
                                this.input[e.target.id] = e.target.value;
                            }}
                        />
                    <br/>
                    </div>

                    <div className="pop-btn pop-btns-expense">
                        <button className="registerbtn" onClick={this.save.bind(this)}>
                            Register
                        </button>
                        <button className="closebtn" onClick={() => {this.closeRegForm()}}>
                            Close
                        </button>
                        <br/><br/>
                    </div>
                    </div>
                
                </div>
                </div>

                <Dashfooter/>
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
      export default fn(dashboard);