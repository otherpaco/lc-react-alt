import '../reset.css';
import '../AppGitHubIssues.css';
import { Issues } from './Issues';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Details } from './Details';

const AppGitHubIssues = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Issues />} />
          <Route path="/issues/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
};

export { AppGitHubIssues };
