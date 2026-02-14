import React, { useState } from 'react'
import "./detail.css"
import DetailHook from './detailHook';
import { useParams } from 'react-router-dom';
function DetailPage() {
  const { code } = useParams();
  const[urlAdress, setUrlAddress]= useState(`https://restcountries.com/v3.1/alpha/${code}`);
  const {data, isLoading, isError} = DetailHook(urlAdress);
   
  if(isError){
    return(alert("There is an error in fetching the data"));
  }
  if(isLoading){
    return(
    <h1> ... Loading</h1>
    )
  }
  return (
    
  <div>
  <div className="container">
    <h1>{data[0].name.official} - Country Information</h1>
    <section>
      <h2>General Information</h2>
      <table >
        <tr><th>Field</th><th>Value</th></tr>
        <tr><td>Common Name</td><td>{data[0].name.common}</td></tr>
        <tr><td>Official Name</td><td>{data[0].name.official}</td></tr>
        <tr><td>Capital</td><td>{data[0].capital}</td></tr>
        <tr><td>Region</td><td>{data[0].region}</td></tr>
        <tr><td>Subregion</td><td>{data[0].subregion}</td></tr>
        <tr><td>Population</td><td>{data[0].population}</td></tr>
        <tr><td>Area</td><td>{data[0].area} km square</td></tr>
        <tr><td>Independent</td><td>{data[0].independent? "True" : "False"}</td></tr>
        <tr><td>UN Member</td><td>{data[0].un? "Yes" : "No"}</td></tr>
        <tr><td>Landlocked</td><td>{data[0].landlocked? "Yes" : "No"}</td></tr>
      </table>
    </section>

    <section>
      <h2>Codes</h2>
      <table>
        <tr><th>Code Type</th><th>Value</th></tr>
        <tr><td>CCA2</td><td>{data[0].cca2}</td></tr>
        <tr><td>CCA3</td><td>{data[0].cca3}</td></tr>
        <tr><td>CCN3</td><td>{data[0].ccn3}</td></tr>
        <tr><td>Top Level Domain</td><td>{data[0].tld}</td></tr>
        
      </table>
    </section>


  </div>
</div>
  )
}

export default DetailPage