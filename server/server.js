import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json());

const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.get("/posts", async (request, response) => {
  const { categoryName } = request.query;
  let query = "SELECT * FROM posts";
  
  if (categoryName) {
    query += " WHERE category = $1";
  }

  try {
    const result = await db.query(query, categoryName ? [categoryName] : []);
    response.json(result.rows);
  } catch (error) {
    console.error('Error fetching posts', error);
    response.status(500).json({ error: 'Something went wrong!' });
  }
});

app.post("/posts", async (request, response) => {
  const { title, content, category } = request.body;

  try {
    const result = await db.query("INSERT INTO posts (title, content, category) VALUES ($1, $2, $3) RETURNING *",
      [title, content, category]
    );

    response.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating post', error);
    response.status(500).json({ error: 'Failed to create post' });
  }
});

app.delete("/posts/:postId", async (request, response) => {
  const postId = request.params.postId;

  try {
    const result = await db.query("DELETE FROM posts WHERE id = $1 RETURNING *", [postId]);
    response.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error('Error deleting post', error);
    response.status(500).json({ error: 'Failed to delete post' });
  }
});

app.get("/posts/:postId", async (request, response) => {
  const postId = request.params.postId;

  try {
    const result = await db.query("SELECT * FROM posts WHERE id = $1", [postId]);
    response.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching post details', error);
    response.status(500).json({ error: 'Failed to fetch post details' });
  }
});

app.post("/posts/:postId/like", async (request, response) => {
  const postId = request.params.postId;

  try {
    const result = await db.query("UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *", [postId]);
    response.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating likes', error);
    response.status(500).json({ error: 'Failed to update likes' });
  }
});

app.get("/posts/category/:categoryName", async (request, response) => {
  const categoryName = request.params.categoryName;

  try {
    const result = await db.query("SELECT * FROM posts WHERE category = $1", [categoryName]);
    response.json(result.rows);
  } catch (error) {
    console.error('Error fetching posts by category', error);
    response.status(500).json({ error: 'Failed to fetch posts by category' });
  }
});

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
