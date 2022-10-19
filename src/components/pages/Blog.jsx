import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/blog/1">Post One</Link>
        </li>
        <li>
          <Link to="/blog/2">Post Two</Link>
        </li>
      </ul>
    </div>
  );
};

export { Blog };
