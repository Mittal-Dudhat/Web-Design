// get data from json on page load
window.onload = function() {
    fetchData();
  };

const addJsonData = (todolist = []) => {
    const ul = document.querySelector('.task-list');
    todolist.forEach(a => addTask(a, ul));
}

// display data from json into html page
const addTask = (task,parent) =>{
    const li = document.createElement('div')
    li.innerHTML = `<input type="checkbox" id="chk${task.id}" onchange="markTaskComplete(this);"/> &ensp;<a id="${task.id}" class= "strikethrough" onclick="expandDivfunc(this)">${task.title} </a>`
    li.id=`divchk${task.id}`
    li.className = "listitem";
    parent.appendChild(li);

    var div = document.createElement("div");
    document.querySelector('.todo-list').appendChild(div)
    div.innerHTML = `<div class="todo-header">
                      <div class="list-title"><b>Task :</b> ${task.title}</div>
                      <div><b>Due Date : </b><span id="datetask">${task.due_date}</span></div>
                      <div><b>Due Time :</b><span id="timetask">${task.due_time}</span></div>
                      <div><b>Description : </b><span id="timetask">${task.description}</span></div>
                    </div><br/><br/>`
    div.id += `div${task.id}`
    div.setAttribute('style', 'display:none;');
}

// xhr call to json file
const fetchData =() =>{
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',function(response){
        if(this.status ===200)
        {
            const data =this.responseText;
            const todolist= JSON.parse (data);
            addJsonData(todolist);
        }
    });
    xhr.open('GET','data/data.json');
    xhr.send();
}

// function to toggle description div
function expandDivfunc(task) {
    var y = 'div'+task.id
    var x = document.getElementById(y);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

// button to display form inputs
const btnshowInput = document.querySelector('#showInput')
const inputdiv = document.getElementById('inputId')
btnshowInput.addEventListener('click', e => {
    inputdiv.style.display = "block";
})

// add button event listener
const btnAdd = document.querySelector('#btnAddNewElement')
btnAdd.addEventListener('click', e => {
    e.preventDefault();
    createNewTask()
})

// Function to display form data into html
function createNewTask() {
  
    var li = document.createElement('div');
  
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var taskdate = document.getElementById('taskdate').value;
    var taskTime = document.getElementById('taskTime').value;
    var taskid= Math.floor(Math.random() * 100);
  
    if (title.length == 0){
      alert('Enter task')
    }
    else if(description.length == 0){
      alert('Enter description')
    }
    else if(taskdate.length == 0){
      alert('Enter date')
    }
    else if(taskTime.length == 0){
      alert('Enter time')
    }
    else{
        document.querySelector('.task-list').appendChild(li)
        li.innerHTML= `<input type="checkbox" id="chk${taskid}" onchange="markTaskComplete(this);"/> <a id="${taskid}" class= "strikethrough" onclick="expandDivfunc(this)">${title}</a>`;
        li.id=`divchk${taskid}`
        li.className = "listitem";
        
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        document.getElementById("taskdate").value = "";
        document.getElementById("taskTime").value = "";
  
        var div = document.createElement("div");
        document.querySelector('.todo-list').appendChild(div)
        div.innerHTML = `<div class="todo-header">
                            <div class="list-title"><b>Task :</b> ${title}</div>
                            <div><b>Due Date : </b><span id="datetask">${taskdate}</span></div>
                            <div><b>Due Time :</b><span id="timetask">${taskTime}</span></div>
                            <div><b>Description : </b><span id="timetask">${description}</span></div>
                          </div><br/><br/>`
        div.id += `div${taskid}`
        div.setAttribute('style', 'display:none;');
        var inputdiv = document.querySelector('#inputId');
        inputdiv.setAttribute('style', 'display:none;');
    }    
  }
  
// added image on checkbox clicked  
function markTaskComplete(obj) {
    var c = document.getElementById(obj.id);
    var span = document.createElement('span');
    var imgDiv = document.querySelector("#div"+obj.id);
    if(c.checked){
        span.innerHTML = `<img src="images/check-mark-tick.png" alt="tick" width="25px"> `;
        span.id="span"+obj.id;
        imgDiv.append(span)
    }
    else{
        const myobj = document.getElementById("span"+obj.id);
        myobj.remove();
    }
}



