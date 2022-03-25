import { useState } from 'react'
import './App.css'
import ThemeButton from './components/ThemeButton'
import TodoForm from './components/TodoForm'
import TodoContainer from './components/TodoContainer'

function App() {
  return (
    <section className="section">
      <article className="article">
        <div className="container">
          <h1>TODO</h1>
          <ThemeButton></ThemeButton>
        </div>
        <TodoForm/>
        <TodoContainer/>
      </article>
    </section>
  );
}

export default App
