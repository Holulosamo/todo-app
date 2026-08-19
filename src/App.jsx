import { useContext } from 'react';
import './style/App.css';
import TodoForm from './components/TodoForm/TodoForm.jsx';
import TodoContainer from './components/TodoContainer/TodoContainer.jsx';
import {ThemeContext} from './context/ThemeContext.jsx';
import Header from './components/Header/Header.jsx';
import Login from './pages/Login.jsx';
import { Routes, Route, Navigate } from 'react-router';
import Home from './pages/Home.jsx';
import { useState } from 'react';
import Register from './pages/Register.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {theme} = useContext(ThemeContext);
  
  return (
      <section className="section">
        <Header/>   
        <Routes>
          <Route 
            index
            path="/"
            element={
              isAuthenticated
              ? <Home />
              : <Navigate to="login" replace />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </section>
  );
}

export default App
