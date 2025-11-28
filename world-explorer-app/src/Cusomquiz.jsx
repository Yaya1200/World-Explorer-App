import { useState, useEffect } from "react";
function CustomQuiz(){
  const [storequestion, setstorequestion] = useState([])
   useEffect(()=>{
    const fetch = async()=>{
    const response = await axios.get('https://opentdb.com/api.php?amount=100&category=22&difficulty=easy&type=multiple');
    }
    fetch();
    setstorequestion(response.data);

   },[])
   return {storequestion}
   
}
export default CustomQuiz;