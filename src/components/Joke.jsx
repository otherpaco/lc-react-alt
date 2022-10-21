import { useFetch } from '../useFetch';

const Joke = () => {
  const {
    data: joke,
    isLoading,
    errorMessage,
  } = useFetch('https://official-joke-api.appspot.com/jokes/random');

  return (
    <div>
      <h2>Joke API</h2>
      {isLoading && <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {joke && !errorMessage && <div>{joke.setup + ' ' + joke.punchline}</div>}
    </div>
  );
};

export { Joke };
