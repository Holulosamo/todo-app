import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from './context/ThemeContext';
import { ItemsProvider } from './context/ItemsContext';
import { FilterProvider } from './context/FilterContext';

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <ItemsProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ItemsProvider>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
