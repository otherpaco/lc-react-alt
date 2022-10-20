import { useEffect, useState } from 'react';

const Joke = () => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErorMessage] = useState(null);

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/jokes/random').then(
      (response) => {
        response
          .json()
          .then((result) => {
            setJoke(result.setup + ' ' + result.punchline);
            setIsLoading(false);
            setErorMessage(null);
          })
          .catch((error) => {
            setIsLoading(false);
            setErorMessage('There was an error!');
          });
      }
    );
  }, []);
  return (
    <div>
      <h2>Joke API</h2>
      {isLoading && <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {joke && !errorMessage && <div>{joke}</div>}
    </div>
  );
};

export { Joke };
