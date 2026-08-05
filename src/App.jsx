import { useContext } from 'react';
import './style/App.css';
import TodoForm from './components/TodoForm/TodoForm.jsx';
import TodoContainer from './components/TodoContainer';
import {ThemeContext} from './context/ThemeContext.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  const {theme} = useContext(ThemeContext);
  
  return (
      <section className="section" data-theme={theme}>
        <Header/>   
        <article className="article">
          <TodoForm />
          <TodoContainer/>
        </article>
      </section>
  );
}

export default App
