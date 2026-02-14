import React, { useEffect, useState } from 'react';
import axios from 'axios';
function DetailHook(url) {
  const[isError, setIsError] = useState(false);
  const[isLoading, setIsLoading] = useState(true);
  const[data, setData] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
    try{
    const fetch = await axios.get(url)
    setData(fetch.data);}
    catch(error){
      setIsError(true);
    }
    finally{
      setIsLoading(false);
    }}
    fetchData();
  },[URL]);
  return  {data, isLoading, isError}
  
}

export default DetailHook