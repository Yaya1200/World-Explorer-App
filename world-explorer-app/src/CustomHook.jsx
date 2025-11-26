import React from "react";
import { useState, useEffect } from "react";
function Countrydata(url){
  const[data, setdata] = useState([]);
  const [is_error, set_iserror] = useState();
  useEffect(()=>{
       try{
   const fetchdata = async()=>{
      const response = await axios.get(url);
      setdata(response.data);
      console.log(data);}
      fetchdata();
       }
       catch(error){
        console.log(`there is an error ${error}`);
        set_iserror(error);

       }
  })
return {data,is_error};

}


export default Countrydata;

