import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import './style/App.css'
import App from './App'
import { ThemeProvider } from './context/ThemeContext';
import { ItemsProvider } from './context/ItemsContext';
import { FilterProvider } from './context/FilterContext';
import { BrowserRouter } from 'react-router';

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <FilterProvider>
      <ItemsProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ItemsProvider>
    </FilterProvider>
  </BrowserRouter>,
);
