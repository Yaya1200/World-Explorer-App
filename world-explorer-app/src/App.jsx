import React from 'react';
import './App.css';
import HomePage from './Home';
import { ThemeProvider } from './TeamContext';


function App() {
  return (
     <ThemeProvider>
      <HomePage />
      </ThemeProvider>
  
   
  );
}

export default App;

