// client/src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    // Cargar los últimos posts al montar el componente
    async function fetchLatestPosts() {
        const response = await fetch('https://post-it-server.onrender.com/posts');
              const posts = await response.json();
          setLatestPosts(posts);
    }

    fetchLatestPosts();
  }, []);

  return (
    <div>
      <h2>Welcome to Post-it all</h2>
      <p>The platform to share your thoughts and experiences.</p>

      <section>
        <h3>Latest Featured Posts</h3>
        <ul>
          {latestPosts.map(post => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Ready to get started?</h3>
        <p>Explore the platform and share your ideas with the community.</p>
        <Link to="/posts/new">
          <button type="submit">Create a New Post</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
