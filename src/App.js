import logo from './logo.svg';
import './App.css';
import { UserDetails } from './Userform/user';
import TodoInput from './Redux-Example/todoInput';
import TodoList from './Redux-Example/todoList';


function App() {
  return (
    <div className="container mt-5">
    <h2 className="text-center">To-Do List</h2>
    <TodoInput/>
    <TodoList/>
  </div>
  );
}

export default App;
