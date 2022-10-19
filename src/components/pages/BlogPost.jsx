import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const params = useParams();
  return <div className="container">This is blog post {params.id}</div>;
};

export { BlogPost };
