import { useState } from 'react'
import AppName from './components/AppName.jsx'
import AddTodo from './components/AddTodo.jsx'
import TodoItem1 from './components/TodoItem1.jsx'
import TodoItem2 from './components/TodoItem2.jsx'
import './App.css'
import { createRoot } from 'react-dom/client'
function App() {

  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo />
      <div className="item-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  )
}

export default App;
