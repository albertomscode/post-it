# Post-it-All

Welcome to Post-it-All, a full-stack React and Express application where users can share their thoughts, create posts, and explore content based on categories.

## Overview

Post-it-All is a database-driven application that combines the power of React for the frontend, Express for the backend, and Supabase for the database. The project allows users to create, categorize, and view posts, providing a seamless experience for sharing and exploring content.

## User Stories

- **Create Posts**: Users can easily create new posts and add them to the platform.
- **Assign Categories**: Each post can be assigned to a specific category, organizing content efficiently.
- **View All Posts**: Users can view all the posts added to the platform along with their respective categories.
- **Category Pages**: Dedicated pages for each category, enabling users to explore posts based on their interests.
- **Add New Categories**: Users have the flexibility to add new categories to diversify content.

## Getting Started

### Database (Supabase)

1. Design a comprehensive database schema with relationships between tables.
2. Use Supabase SQL Editor or a seed.js file to seed the database with data.

### Server (Express)

1. Create an Express server to handle requests.
2. Implement endpoints for POST and GET requests to interact with the database.

### Client (React)

1. Develop a React client for a seamless user interface.
2. Use `react-router-dom` to create multiple pages, including a home page, a page to display all posts, and a page for creating new posts.

## Hosting on Render.com

This project is hosted on [Render.com]

Client side: https://post-it-vliy.onrender.com

Server: https://post-it-server.onrender.com/posts

## Stretch Goals

- **Post Likes**: Allow users to like posts and see the like count increase.
- **Delete Posts**: Implement functionality to allow users to delete their posts.
- **Category Filtering**: Enable users to filter posts by category using query strings or dedicated routes.

Feel free to explore, contribute, and share your experiences with Post-it-All!

Happy Posting! 🚀
