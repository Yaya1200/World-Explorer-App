import React, { useEffect, useState } from "react";
import './quiz.css';
import "./Home.css";
import HomePage from "./Home";
import { useContext } from "react";
import { ThemeContext } from "./TeamContext";
import "./Countires.css"
import CountriesPage from "./Countries";
import CustomQuiz from "./Cusomquiz";


function QuizPage() {

  const {theme, toggleTheme} = useContext(ThemeContext);
  const {storequestion} = CustomQuiz();
  console.log(storequestion[0]);
  const [homepage, sethomepage] = useState(false);
  const [countirespage, setcountriespage] = useState(false);
  const [answer, setanswer] = useState('');

   if(homepage){
    return <HomePage/>
   }
   if(countirespage){
    return <CountriesPage/>
   }

  function Checkanswer(){

  }
  let answerarray = []
  function addingtoanswerarray(){
    answerarray.push(storequestion[0]?.incorrect_answers[0]);
    answerarray.push(storequestion[0]?.incorrect_answers[1]);
    answerarray.push(storequestion[0]?.incorrect_answers[2]);
   answerarray.push(storequestion[0]?.correct_answer);
  }
  addingtoanswerarray();
  console.log(answerarray);
  let value1 = Math.floor((Math.random() * 3))
  let value2 = Math.floor((Math.random() * 2))
  let value3 = Math.floor((Math.random() * 1))
  let value4 = Math.floor((Math.random() * 0))
  return (
    <div style={{backgroundColor: theme == 'light' ? 'white' : 'black', color: theme == 'light' ? 'black' : 'white'}}>
      <div>
      <nav className={`navbar navbar-expand-lg ${
  theme === "light" ? "navbar-light-mode" : "navbar-dark-mode"
}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            World-Explorer-App
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link active" aria-current="page" onClick={()=>{
                  sethomepage(true);
                }}>
                  Home
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link active" href="#"   onClick={()=>{
                  setcountriespage(true);
                }}>
                  Countries
                </button>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Settings
                </a>
              </li>
            </ul>

            <form className="d-flex" role="search">
            
              
                 <button style={{width: '60px', height:'40px', border: 'none'}} onClick={toggleTheme}>
                {theme === "light" ? "☀️" : "🌙"}</button>
            </form>
          </div>
        </div>
      </nav>
      </div>
       <form onSubmit={Checkanswer} className="quizbox">
        <div>
      <p>Choose the Correct answer Fromt the givern alternatives</p>
      <p>1. {`${answerarray[value1]}`} </p>
      <label>
      <input type="radio" checked ={answer === "A"} onChange={()=>{
        setanswer('A');
      }}></input> A. {`${storequestion[0]?.correct_answer}`}
      </label><br/>
      <label>
      <input type="radio" checked ={answer === "B"} onChange={()=>{
        setanswer('B');
      }}></input> B. {`${storequestion[0]?.correct_answer}`}
      </label><br/>
      <label>
      <input type="radio" checked ={answer === "C"} onChange={()=>{
        setanswer('C');
      }}></input> C. {`${storequestion[0]?.correct_answer}`}
      </label><br/>
      <label>
      <input type="radio" checked ={answer === "D"} onChange={()=>{
        setanswer('D');
      }}></input> D. {`${storequestion[0]?.correct_answer}`}
      </label>
    </div>
      <button onClick={Checkanswer}>check answer</button>
    </form>
    <div  className="correct-answer">
      <p>the correct answer is {`${storequestion[0]?.correct_answer}`}</p>
    </div>
    </div>
   
  );
}

export default QuizPage;