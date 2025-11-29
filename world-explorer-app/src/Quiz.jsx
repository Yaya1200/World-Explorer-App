import React, { useEffect, useState, useContext } from "react";
import "./quiz.css";
import "./Home.css";
import "./Countires.css";

import HomePage from "./Home";
import CountriesPage from "./Countries";
import CustomQuiz from "./Cusomquiz";
import { ThemeContext } from "./TeamContext";

function QuizPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { storequestion } = CustomQuiz();

  const [homepage, setHomepage] = useState(false);
  const [countriesPage, setCountriesPage] = useState(false);

  const [answer, setAnswer] = useState("");
  const [answerOptions, setAnswerOptions] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [correctanswer,  setcorrectanswer] = useState(false);


  if (homepage) return <HomePage />;
  if (countriesPage) return <CountriesPage />;


  useEffect(() => {
    if (!storequestion || storequestion.length === 0) return;

    const firstQ = storequestion[0];

    if (!firstQ) return;

    let options = [
      ...firstQ.incorrect_answers,
      firstQ.correct_answer,
    ];

  
    options = options
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setAnswerOptions(options);
    setLoading(false);
  }, [storequestion]);


  function Checkanswer(e) {
    e.preventDefault();

    if (answer === "") {
      alert("Please choose an answer.");
      return;
    }

    const correct = storequestion[0].correct_answer;

    if (answer === correct) {
      setcorrectanswer(true);
      alert("Correct!");
    } else {
      alert("Incorrect! The correct answer is: " + correct);
    }
  }

  if (loading || !storequestion[0]) {
    return <p>Loading question...</p>;
  }

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
      }}
    >
     
      <nav
        className={`navbar navbar-expand-lg ${
          theme === "light" ? "navbar-light-mode" : "navbar-dark-mode"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            World-Explorer-App
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => setHomepage(true)}
                >
                  Home
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => setCountriesPage(true)}
                >
                  Countries
                </button>
              </li>

              <li className="nav-item">
                <a className="nav-link">Settings</a>
              </li>
            </ul>

            <button
              style={{
                width: "60px",
                height: "40px",
                border: "none",
              }}
              onClick={toggleTheme}
            >
              {theme === "light" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      <form onSubmit={Checkanswer} className="quizbox">
        <p>Choose the correct answer from the given choices:</p>
        <p>1. {storequestion[0]?.question}</p>

        {answerOptions.map((option, i) => (
          <label key={i}>
            <input
              type="radio"
              name="answer"
              checked={answer === option}
              onChange={() => setAnswer(option)} 
            /> 
            {"  "}
            {String.fromCharCode(65 + i)}. {option}
            <br/>
          </label> 
        ))}<br/>
         
        <button type="submit">Check Answer</button>
      </form>

      <div className="correct-answer">
        {correctanswer ? <p>
          Correct answer:{" "}
          <strong>{storequestion[0]?.correct_answer}</strong>
        </p>: null}
      </div>
    </div>
  );
}

export default QuizPage;
