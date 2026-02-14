import React from 'react';
import './App.css';
import HomePage from './Home';
import { ThemeProvider } from './TeamContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesPage from './Countries';
import QuizPage from './Quiz';


function App() {
  return (
    <BrowserRouter>
     <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/countries" element={<CountriesPage />}/>
        <Route path="/quiz" element={<QuizPage />}/>
      </Routes>
      
      </ThemeProvider>
      </BrowserRouter>
  
   
  );
}

export default App;

