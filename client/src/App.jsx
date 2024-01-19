import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import PostDetail from './components/PostDetail';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Post List</Link>
        </li>
        <li>
          <Link to="/posts/new">Create Post</Link>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Post-it all</h1>
    </header>
  );
};

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/new" element={<CreatePost />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/posts/category/:categoryName" element={<PostList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
