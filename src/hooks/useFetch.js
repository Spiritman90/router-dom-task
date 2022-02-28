import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          setIsLoading(true);
          if (!res.ok) {
            throw Error(`Cannot fetch data from that resource`);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]);
  return [data, IsLoading, error];
};

export default useFetch;
