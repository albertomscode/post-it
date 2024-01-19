import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Obtener posts
        const postsResponse = await fetch("http://localhost:8080/posts");
        if (postsResponse.ok) {
          const postsData = await postsResponse.json();
          setPosts(postsData);
        } else {
          throw new Error('Failed to fetch posts');
        }

        // Obtener categorías disponibles
        const categoriesResponse = await fetch("http://localhost:8080/categories");
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
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <div>
        <ul>
          {categories.map(category => (
            <li key={category.name}>
              <Link to={`/posts/category/${category.name}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
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
