import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { NavigationBar } from './NavigationBar';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

const Root = () => {
  // const routes = [
  //   { path: '/', name: 'Home', Component: App, end: true },
  //   { path: '/about', name: 'About', Component: About, end: false },
  //   { path: '/contact', name: 'Contact', Component: Contact, end: false },
  //   { path: '/blog', name: 'Blog', Component: Blog, end: true },
  //   { path: '/blog/:id', name: 'Post', Component: BlogPost, end: false },
  //   { path: '/*', name: 'Not Found', Component: NotFound, end: false },
  // ];

  return (
    <Router>
      <div className="todo-app-container">
        <NavigationBar />
        <div className="content">
          <Routes>
            {/* {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))} */}
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export { Root };
