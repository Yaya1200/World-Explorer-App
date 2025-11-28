import axios from "axios";
import { useState, useEffect } from "react";
function Countrydata(url) {
  const [data, setData] = useState([]);
  const [is_error, setIsError] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log("There is an error: ", error);
        setIsError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, is_error, Loading };
}




export default Countrydata;

