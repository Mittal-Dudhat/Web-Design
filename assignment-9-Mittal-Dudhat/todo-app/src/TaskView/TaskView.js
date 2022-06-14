import React from 'react';
import './TaskView.scss';

export class TaskView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fetchedTaskData: [],
            display: 'none',
            title:'',
            desc:'',
            cdate:'',
            ldate:'',
            completed: 'none',
            status: 'pending',
            duedate:'',
            duetime:''
        }
    }

    //componentdidmount to display task on page load
    componentDidMount(){
        this.fetchData();
    }

    //fetch method to get data from db
    fetchData = () => {
        fetch("http://localhost:9001/todos/")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                fetchedTaskData: json
            });
        })   
    }

    render(){
        return(
            <div className="task-view">
            <h1 className="header">To-do List</h1>
            <hr/>
                <div className="task-view-div">
                <div className="listdiv">
                    {this.state.fetchedTaskData.map((user, id) => (
                        <div key={id}>
                            <span className="titleview" style={{display:'inline-block', width: 200, textDecoration:user.textdecoration}}>{user.task_title}</span>
                            <span><button onClick={()=>this.markComplete(user)} className="markbtn">Mark</button></span>
                            <span><button onClick={()=>this.showTaskState(user)} className="show">Show</button></span>
                        </div>
                     ))}
                </div>
                {this.showTaskDetailsView()}

                </div>
            </div>
        )
    }


// mark complete method to update completed task
    markComplete = (user) => {
        const data = {
            status: "completed",
            textdecoration: "line-through"
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch("http://localhost:9001/todos/"+user.id,requestOptions)
        .then((res) => res.json())
        .then((json) => {
            this.fetchData();
        })   
    }

    //set state of all control fields
    showTaskState = (user) => {
        this.setState({
            display:'block',
            title: user.task_title,
            desc: user.description,
            duedate: user.due_date,
            duetime:user.due_time,
            status: user.status
        })
    }


    //created method to display task details
    showTaskDetailsView = () => {
        if(this.state.display === 'block'){
            return(
                <div className="task-details" style={{display:this.state.display}}>
                    <h2 className="taskheader"> Task Details </h2>
                    <div>
                        <span className="title">Title:</span>
                        <span>{this.state.title}</span>
                    </div>
                    <div>
                        <span className="title">Description:</span>
                        <span>{this.state.desc}</span>
                    </div>
                    <div>
                        <span className="title">Due Date:</span>
                        <span>{this.state.duedate}</span>
                    </div>
                    <div>
                        <span className="title">Due Time:</span>
                        <span>{this.state.duetime}</span>
                    </div>
                    <div>
                        <span className="title">Status:</span>
                        <span>{this.state.status}</span>
                    </div>
                </div>
                )
        }else{
            return(
                <div></div>
            )
        }
        
    }
}