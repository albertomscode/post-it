// Importing necessary modules and configuring environment variables
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// Setting up the Express app and middleware
const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json());

// Database connection setup
const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Route to retrieve all posts or posts of a specific category
app.get("/posts", async (request, response) => {
  const { categoryName } = request.query;
  let query = "SELECT * FROM posts";
  
  if (categoryName) {
    query += " WHERE category = $1";
  }
  const result = await db.query(query, categoryName ? [categoryName] : []);
  response.json(result.rows);
});

// Route to retrieve all available categories
app.get("/categories", async (request, response) => {
  const result = await db.query("SELECT * FROM categories");
  response.json(result.rows);
});

// Route to retrieve all posts of a specific category
app.get("/categories/:categoryName/posts", async (request, response) => {
  const categoryName = request.params.categoryName;
  const result = await db.query("SELECT * FROM posts WHERE category = $1", [categoryName]);
  response.json(result.rows);
});

// Route to create a new post
app.post("/posts", async (request, response) => {
  const { title, content, category } = request.body;
  const result = await db.query("INSERT INTO posts (title, content, category) VALUES ($1, $2, $3) RETURNING *",
    [title, content, category]
  );
  response.json(result.rows[0]);
});

// Route to delete a specific post
app.delete("/posts/:postId", async (request, response) => {
  const postId = request.params.postId;
  const result = await db.query("DELETE FROM posts WHERE id = $1 RETURNING *", [postId]);
  response.json({ message: "Post deleted successfully" });
});

// Route to retrieve details of a specific post
app.get("/posts/:postId", async (request, response) => {
  const postId = request.params.postId;
  const result = await db.query("SELECT * FROM posts WHERE id = $1", [postId]);
  response.json(result.rows[0]);
});

// Route to increment the likes of a specific post
app.post("/posts/:postId/like", async (request, response) => {
  const postId = request.params.postId;
  const result = await db.query("UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *", [postId]);
  response.json(result.rows[0]);
});

// Starting the server
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
