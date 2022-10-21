import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErorMessage] = useState(null);

  useEffect(() => {
    fetch(url).then((response) => {
      response
        .json()
        .then((results) => {
          setData(results);
          setIsLoading(false);
          setErorMessage(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setErorMessage('There was an error!');
        });
    });
  }, [url]);

  return { data, isLoading, errorMessage };
};

export { useFetch };
