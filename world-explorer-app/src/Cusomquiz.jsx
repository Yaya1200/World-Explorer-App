import { useState, useEffect } from "react";
import axios from "axios";

function CustomQuiz() {
  const [storequestion, setstorequestion] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://opentdb.com/api.php?amount=100&category=22&difficulty=easy&type=multiple"
        );
        setstorequestion(result.data.results); 
      } catch (err) {
        console.error("Error fetching quiz", err);
      }
    };

    fetchData();
  }, []);

  return { storequestion };
}

export default CustomQuiz;
