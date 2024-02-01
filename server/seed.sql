CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  /*category VARCHAR(255)*/
  categories_id VARCHAR REFERENCES categories(id)
);


INSERT INTO categories (name) VALUES ('Technology');
INSERT INTO categories (name) VALUES ('Travel');
INSERT INTO categories (name) VALUES ('Food');

INSERT INTO posts (title, content, category) VALUES ('Introduction to React Hooks', 'Learn about the power of React Hooks.', 'Technology');
INSERT INTO posts (title, content, category) VALUES ('Exploring the Grand Canyon', 'A breathtaking journey through the Grand Canyon.', 'Travel');
INSERT INTO posts (title, content, category) VALUES ('Delicious Pasta Recipes', 'Explore mouthwatering pasta recipes for all occasions.', 'Food');
INSERT INTO posts (title, content, category) VALUES ('Best Practices in JavaScript Coding', 'Learn the essential best practices for writing clean and efficient JavaScript code.', 'Technology');
INSERT INTO posts (title, content, category) VALUES ('Hidden Gems: Unexplored Destinations', 'Discover lesser-known but amazing travel destinations around the world.', 'Travel');


ALTER TABLE posts ADD COLUMN likes INTEGER DEFAULT 0;