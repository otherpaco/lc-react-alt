import { useQuery } from 'react-query';

const Joke = () => {
  const fetchJoke = () => {
    return fetch('https://official-joke-api.appspot.com/jokes/random').then(
      (response) => response.json()
    );
  };

  const {
    data: joke,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery('joke', fetchJoke, {
    staleTime: 6000,
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <h2>Joke API</h2>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {isSuccess && <div>{joke.setup + ' ' + joke.punchline}</div>}
    </div>
  );
};

export { Joke };
