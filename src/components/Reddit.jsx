import { useFetch } from '../useFetch';

const Reddit = () => {
  const {
    data: posts,
    isLoading,
    errorMessage,
  } = useFetch('https:/www.reddit.com/r/aww.json');

  console.log(posts);

  return (
    <div>
      <h2>Reddit API</h2>
      {isLoading && <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {posts && !errorMessage && (
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
