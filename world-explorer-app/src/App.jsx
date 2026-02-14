import React from 'react';
import './App.css';
import HomePage from './Home';
import { ThemeProvider } from './TeamContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesPage from './Countries';
import QuizPage from './Quiz';
import DetailPage from './detail';


function App() {
  return (
    <BrowserRouter>
     <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/countries" element={<CountriesPage />}/>
        <Route path="/quiz" element={<QuizPage />}/>
      <Route path="/detail/:code" element={<DetailPage />} />
      </Routes>
      
      </ThemeProvider>
      </BrowserRouter>
  
   
  );
}

export default App;

