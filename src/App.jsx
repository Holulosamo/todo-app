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
import z from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
   username: z.string().transform(value => value.replace(/\s+/g, ''))
    .pipe(z.string().min(5, "El usuario debe tener al menos 5 carácteres"))
    .refine((val) => noSpecialCharacters.test(val ?? ""), 'El usuario no puede contener carácteres especiales'),
    email: z.email("Ingrese un correo electrónico valido"),
    password: z.string().transform(value => value.replace(/\s+/g, '')).pipe(z.string().min(6, "La contraseña debe tener al menos 6 carácteres")),
})

function App() {
  const methods = useForm({
    resolver: zodResolver(schema)
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {theme} = useContext(ThemeContext);
  
  return (
    <FormProvider {...methods}>
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
    </FormProvider>
  );
}

export default App
