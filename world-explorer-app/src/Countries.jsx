import React, { useEffect, useState } from "react";
import Countrydata from "./CustomHook";
import "./Home.css";
import HomePage from "./Home";
import { useContext } from "react";
import { ThemeContext } from "./TeamContext";
import "./Countires.css"
import QuizPage from "./Quiz";

function CountriesPage() {
  const [urladress, seturladress] = useState(
    "https://restcountries.com/v3.1/all?fields=name,flags,languages"
  );
  const {theme, toggleTheme} = useContext(ThemeContext);

  const { data, is_error, Loading } = Countrydata(urladress);
  const [countrieslanguage1, setcountrieslanguage] = useState("");
  const [searchName, setSearchName] = useState("");
  const [homepage, sethomepage] = useState(false);
  const [quizpage, setquizpage] = useState(false);

  useEffect(() => {
    if (is_error) alert(`There is an error: ${is_error}`);
  }, [is_error]);
   if(homepage){
    return <HomePage/>
   }
   if(quizpage){
    return <QuizPage/>
   }
  function filterByLanguage() {
    seturladress(
      `https://restcountries.com/v3.1/lang/${countrieslanguage1}?fields=name,flags,languages`

    );
  }

  function inputLanguage(e) {
    const value1 = e.target.value;
    setcountrieslanguage(value1);
  }


  function Searchbyname(e) {
    setSearchName(e.target.value);
  }

  function Searchfunction(e) {
    e.preventDefault();
    seturladress(
      `https://restcountries.com/v3.1/name/${searchName}?fields=name,flags,languages`
    );
  }

  return (
    <div style={{backgroundColor: theme == 'light' ? 'white' : 'black', color: theme == 'light' ? 'black' : 'white'}}>
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
                <button className="nav-link active" href="#"  onClick={()=>{
                  setquizpage(true);
                }}>
                  Quiz
                </button>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Settings
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Filter
                </a>

                <ul className="dropdown-menu">
                  <input
                    placeholder="Enter only 3 characters'"
                    name="continent"
                    onChange={inputLanguage}
                  />
                  <li>
                    <button
                      className="dropdown-item " 
                      onClick={filterByLanguage}
                    >
                      Check language
                    </button>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by name"
                onChange={Searchbyname}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={Searchfunction}
              >
                Search
              </button>
                 <button style={{width: '60px', height:'40px', border: 'none'}} onClick={toggleTheme}>
                {theme === "light" ? "☀️" : "🌙"}</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="grid-content">
        {data.slice(0, 100).map((country, index) => (
          <div className="grid-elements" key={index}>
            <ul style={{ listStyle: "none" }}>
              <li>Name: {country.name.official}</li>
              <li style={{backgroundImage: `url(${country.flags.svg})`,
                          width: '30px',
                          height: '20px',
                          objectFit: "cover"
                                }}></li>
              <li>Language: {Object.values(country.languages)[0]}</li>
              
            </ul>

            <button className="grid-button">view detail</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountriesPage;


