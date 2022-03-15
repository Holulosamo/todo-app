import { useState } from 'react'
import './App.css'
import ThemeButton from './components/ThemeButton'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  return (
  <div className="todo-container">
    <h1>Todo</h1>
    <ThemeButton></ThemeButton>
    <TodoForm />
    <TodoList />
  </div>
  )
}

export default App
