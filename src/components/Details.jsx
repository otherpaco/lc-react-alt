import { formatDistance } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Comments } from './Comments';

const Details = () => {
  const params = useParams();

  const fetchIssue = () => {
    return fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues/${params.id}`
    ).then((response) => response.json());
  };

  const {
    isLoading,
    isSuccess,
    data: issue,
  } = useQuery(['issue', params.id], fetchIssue);

  return (
    <div className="comments-container">
      {isLoading && <div>LOADING</div>}
      {isSuccess && (
        <>
          <h2>
            {issue.title} <span>#{issue.number}</span>
          </h2>
          <div className="issue-details">
            <a href={issue.user.html_url}>{issue.user.login}</a> opened this
            issue{' '}
            {formatDistance(new Date(issue.created_at), new Date(), {
              addSuffix: true,
            })}
          </div>

          <div className="comment-container">
            <a href={issue.user.html_url}>
              <img
                src={issue.user.avatar_url}
                alt="avatar"
                className="avatar"
              />
            </a>
            <div className="comment">
              <div className="comment-heading">
                <a href={issue.user.html_url}>{issue.user.login}</a> wrote{' '}
                {formatDistance(new Date(issue.created_at), new Date(), {
                  addSuffix: true,
                })}
              </div>
              <div className="comment-body markdown-body">
                <ReactMarkdown>{issue.body}</ReactMarkdown>
              </div>
            </div>
          </div>

          <div className="border"></div>
          <Comments issueNumber={issue.number} />
        </>
      )}
    </div>
  );
};

export { Details };
