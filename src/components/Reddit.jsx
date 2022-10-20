import { useEffect, useState } from 'react';

const Reddit = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErorMessage] = useState(null);

  useEffect(() => {
    fetch('https:/www.reddit.com/r/aww.json').then((response) => {
      response
        .json()
        .then((results) => {
          setPosts(results.data.children);
          setIsLoading(false);
          setErorMessage(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setErorMessage('There was an error!');
        });
    });
  }, []);
  return (
    <div>
      <h2>Reddit API</h2>
      {isLoading && <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {posts && !errorMessage && (
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.data.id}>
                <a href={`https://www.reddit.com${post.data.permalink}`}>
                  {post.data.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { Reddit };
