import React, { useEffect } from "react";
import axios from "axios";
import Countrydata from "./CustomHook";
function HomePage(){
  let url = "https://restcountries.com/v3.1/all?fields=name,region,population";
 const {data, is_error,Loading} = Countrydata(url)
 console.log(data);
  return <div><div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">World-Explorer-App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Countries</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Quiz</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Setting</a>
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
    <li><a className="dropdown-item" href="#">Continent</a></li>
    <li><a className="dropdown-item" href="#">Population</a></li>
  </ul>
</li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>

<div>
  
</div>


</div>
}
export default HomePage;
