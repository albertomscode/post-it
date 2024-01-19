import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPostDetails() {
        const response = await fetch(`http://localhost:8080/posts/${postId}`);
        const postDetails = await response.json();
        setPost(postDetails);
    }

    getPostDetails();
  }, [postId]);

  const handleLike = async () => { await fetch(`http://localhost:8080/posts/${postId}/like`, {
        method: 'POST',
      });
      getPostDetails();
  };

  const handleDelete = async () => { await fetch(`http://localhost:8080/posts/${postId}`, {
        method: 'DELETE',
      });
      navigate('/posts');
  };

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Posted on {post.category}</p>
      <p>🩷 {post.likes}</p>

      <button type="submit" onClick={handleLike}>Like</button>
      <button type="submit" onClick={handleDelete}>Delete Post</button>

      <p>
        <Link to="/posts">Back to Posts</Link>
      </p>
    </div>
  );
}

export default PostDetails;
