import  { useEffect, useState, useContext } from "react";
import Countrydata from "./CustomHook";
import "./Home.css";
import { ThemeContext } from "./TeamContext"; 
import { Link } from "react-router-dom";


function HomePage() {
  const [urladress, seturladress] = useState(
    "https://restcountries.com/v3.1/all?fields=name,region,population"
  );

  const { theme, toggleTheme } = useContext(ThemeContext); 

  const { data, is_error} = Countrydata(urladress);

  const [subRegionData, setBySubRegion] = useState("");
  const [continentName1, setcontinentName] = useState("");
  const [searchName, setSearchName] = useState("");
  

  useEffect(() => {
    if (is_error) alert(`There is an error: ${is_error}`);
  }, [is_error]);



  function filterByContinent() {
    seturladress(
      `https://restcountries.com/v3.1/region/${continentName1}?fields=name,region,population`
    );
  }

  function inputContinent(e) {
    setcontinentName(e.target.value);
  }

  function inputSubregion(e) {
    setBySubRegion(e.target.value);
  }

  function filterBySubregion() {
    seturladress(
      `https://restcountries.com/v3.1/subregion/${subRegionData}?fields=name,region,population`
    );
  }

  function Searchbyname(e) {
    setSearchName(e.target.value);
  }

  function Searchfunction(e) {
    e.preventDefault();
    seturladress(
      `https://restcountries.com/v3.1/name/${searchName}?fields=name,region,population`
    );
  }

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
      }}
    >
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
               <Link
                  className="nav-link" to="/countries"
               
                >
                  Countries
                </Link>
              </li>

              <li className="nav-item">
               <Link
                  className="nav-link" to="/quiz"
               
                >
                  Quiz
                </Link>
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
                    placeholder="Enter Continent"
                    name="continent"
                    onChange={inputContinent}
                  />
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={filterByContinent}
                    >
                      Check Continent
                    </button>
                  </li>

                  <input
                    placeholder="Enter Subregion"
                    name="subregion"
                    onChange={inputSubregion}
                  />
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={filterBySubregion}
                    >
                      Check Subregion
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
              <li>Region: {country.region}</li>
              <li>Population: {country.population}</li>
            </ul>

            <button className="grid-button">view detail</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;


