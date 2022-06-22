import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      await axios
        .get(url)
        .then(function (response) {
          setData(response.data.data);
          console.log(response.data.data);
        })
        .catch(function (error) {
          setError(error);
          //   console.log(error);
        });

      setLoading(false);
    };
    fetchData(url);
  }, []);

  return { loading, error, data };
};

export default useFetch;
