import React,{ Component } from 'react';
import { instance } from '../utilities/AxiosConfig';
import "./askQuery.scss";
import askaquery from '../images/askaquery2.jpg';
import Header from "../HomePage/Header";


export default class askQuery extends Component {
    constructor(props){
        super(props);
        this.state={query:'', username:'', email:''};
        this.handleChange=this.handleChange.bind(this);
        this.onSendClick=this.onSendClick.bind(this);
    }

    handleChange (event){
        this.setState({[event.target.name]:event.target.value})
    }

    // ask query send button click send email
    onSendClick(){
        var pr = instance.post('./email',{
            username: this.state.username,
            email: this.state.email,
            query: this.state.query
        });
        pr.then((response) =>{
            console.log(response.data);
        })
        alert("Email sent successfully");
        this.props.history.push('/');
    }
    render(){
        return (
            <div className="askQuery">
                 <Header/>
                 <div className="flexbox-containerask">
                <div className="flexbox-signupask1">
                <img src={askaquery} alt="feedback" height="300%" />
                </div>
                <div className="flexbox-signupask2">
                <h1>Ask a Query</h1>
                <label>Enter your Name:</label>
                <input type="text" name="username" value={this.state.name} onChange={this.handleChange}></input><br></br><br></br>
                <label>What's your Query?</label>
                <input type="textarea" name="query" value={this.state.query}
                onChange={this.handleChange}></input><br></br><br></br>
                <button onClick={this.onSendClick} className="querybtn">Send</button>
                </div>
 
                </div>
            </div>
            
        )}

    }