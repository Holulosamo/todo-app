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

const noSpecialCharacters = /^[a-zA-Z0-9]+$/

const schema = z.object({
   username: z.string().transform(value => value.replace(/\s+/g, ''))
    .pipe(z.string().min(5, "Username must be at least 4 characters long").max(15, "Username is too long"))
    .refine((val) => noSpecialCharacters.test(val ?? ""), 'Username doesnt support special characters'),
    email: z.email("Enter a valid email address like name@example.com"),
    password: z.string().transform(value => value.replace(/\s+/g, '')).pipe(z.string().min(7, "Your password must be at least 7 characters long")),
})

function App() {
  const methods = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
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
