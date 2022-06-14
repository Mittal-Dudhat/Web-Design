import React from 'react';
import './Addtodoform.scss';

export class AddTodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            duedate: '',
            duetime: '',
            display: 'none',
            displayButton: 'block'
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind();
        this.showFormView = this.showFormView.bind();
    }

    // created method to change state on input change
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    // created method for sending data to api and save data to db
    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            task_title: this.state.title,
            description: this.state.description,
            status: "pending",
            textdecoration: "none",
            due_date: this.state.duedate,
            due_time: this.state.duetime
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch("http://localhost:9001/todos/",requestOptions)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                title: '',
                description: '',
                duetime: '',
                duedate: '',
                display:'none',
                displayButton: 'block',
            })
            alert("Task added!!");
        })   
    }

    //show controls on create task
    showFormView = () => {
        this.setState({
            display:'block',
            displayButton: 'none'
        })
    }

    //input conrols 
    render(){
        return(
            <div className="todo-form">
                <div className="Add-button">
                    <button style={{display:this.state.displayButton}} onClick={this.showFormView}>Click here to add a new task</button>
                </div>
                <form onSubmit={this.handleSubmit} style={{display:this.state.display}}>
                 
                    <input
                    name="title"
                    type="text"
                    className="input-elements"
                    placeholder="Enter Title here"
                    value={this.state.title}
                    onChange={this.handleInput}
                    required />
                
                    <input
                    name="description"
                    type="text"
                    className="input-elements"
                    placeholder="Enter Description here"
                    value={this.state.description}
                    onChange={this.handleInput}
                    required />

                    <input
                    name="duedate"
                    type="date"
                    className="input-elements"
                    placeholder="Choose Created Date here"
                    value={this.state.duedate}
                    onChange={this.handleInput}
                    required />

                    <input
                    name="duetime"
                    type="time"
                    className="input-elements"
                    placeholder="Choose Last modified Date here"
                    value={this.state.duetime}
                    onChange={this.handleInput}
                    required />
               
                <button>Submit</button>
                </form>
            </div>
        )
    }
}