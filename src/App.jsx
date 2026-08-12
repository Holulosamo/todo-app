import { useContext } from 'react';
import './style/App.css';
import TodoForm from './components/TodoForm/TodoForm.jsx';
import TodoContainer from './components/TodoContainer';
import {ThemeContext} from './context/ThemeContext.jsx';
import Header from './components/Header/Header.jsx';
import Login from './pages/Login.jsx';

function App() {
  const {theme} = useContext(ThemeContext);
  
  return (
      <section className="section">
        <Header/>   
        <article className="article">
          <TodoForm />
          <TodoContainer/>
        </article>
        <Login/>
      </section>
  );
}

export default App
