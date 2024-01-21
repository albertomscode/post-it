import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const postsResponse = await fetch(`https://post-it-server.onrender.com/posts${selectedCategory ? `?categoryName=${selectedCategory}` : ''}`);
        if (postsResponse.ok) {
          const postsData = await postsResponse.json();
          setPosts(postsData);
        } else {
          throw new Error('Failed to fetch posts');
        }

        const categoriesResponse = await fetch("https://post-it-server.onrender.com/categories");
        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json();
          setCategories(categoriesData);
        } else {
          throw new Error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }

    fetchData();
  }, [selectedCategory]);

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
