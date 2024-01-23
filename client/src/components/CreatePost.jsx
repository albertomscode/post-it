import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new category
    const categoryResponse = await fetch('https://post-it-server.onrender.com/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: category }),
    });

    if (!categoryResponse.ok) {
      console.error('Failed to create category');
      return;
    }

    // Continue with creating the post after creating the category
    const postResponse = await fetch('https://post-it-server.onrender.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, category }),
    });

    if (postResponse.ok) {
      console.log('Post created successfully!');
      navigate('/posts');
    } else {
      console.error('Failed to create post');
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
