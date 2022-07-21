import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'; 
import {storeTodos} from './components/store';

import TodoList from './components/TodoList';
import TodoForm from './components/todoForm';
import './App.css';



function App() {

  const [toDos, setToDos] = useState(storeTodos)
  const toDoArray = [...toDos];

  const completeTodo = (id) => {
    const index = toDos.findIndex(toDo => toDo.id === id)
    toDoArray[index].isComplete = !toDoArray[index].isComplete
    setToDos(toDoArray)
  }

  const deleteTodo = (id) => {
    const newToDos = toDos.filter(toDo => toDo.id !== id)
    setToDos(newToDos)
  }

  const addTodo = (text) => {
    const todoToAdd = {
      id: uuidv4(),
      text: text,
      isComplete: false
    }
    toDoArray.push(todoToAdd)
    setToDos(toDoArray)
  }

  
  return (
    <div className="App">
      <h1>List of Todos</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList text={toDos} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;