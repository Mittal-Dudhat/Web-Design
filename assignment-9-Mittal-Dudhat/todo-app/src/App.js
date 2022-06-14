import logo from './logo.svg';
import './App.css';
import { AddTodoForm } from './AddTodoForm/Addtodoform';
import { TaskView } from './TaskView/TaskView';

function App() {
  return (
    <div className="App">
      <div className="container">
        <TaskView/>
        <AddTodoForm/>
      </div>
    </div>
  );
}

export default App;
