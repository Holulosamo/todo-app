import { useContext, useEffect, useState } from 'react';
import './App.css';
import ThemeButton from './components/ThemeButton';
import TodoForm from './components/TodoForm';
import TodoContainer from './components/TodoContainer';
import ThemeContext from './context/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContext);

  return (
      <section className="section" data-theme={theme}>
        <article className="article">
          <div className="container">
            <h1>TODO</h1>
            <ThemeButton></ThemeButton>
          </div>
          <TodoForm />
          <TodoContainer/>
        </article>
      </section>
  );
}

export default App
