import { useQuery } from 'react-query';

const Reddit = () => {
  const fetchPosts = () => {
    return fetch('https://www.reddit.com/r/aww.json').then((response) =>
      response.json()
    );
  };

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery('posts', fetchPosts);
  return (
    <div>
      <h2>Reddit API</h2>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {isSuccess && (
        <ul>
          {posts.data.children.map((post) => {
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
