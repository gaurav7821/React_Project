import { useState } from 'react'
import AppName from './components/AppName.jsx'
import AddTodo from './components/AddTodo.jsx'
import TodoItem from './components/TodoItem.jsx'
import TodoItems from './components/TodoItems.jsx'
import './App.css'

function App() {

  const todoItems = [
    {
      name: 'Buy Milk',
      date: '4/10/2026'
    },
    {
      name: 'Go to college',
      date: '4/10/2026'
    },
    {
      name: 'Like this video',
      date: 'right now'
    },
  ]

  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  )
}

export default App;
