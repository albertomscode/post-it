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

## Installation

1. Clone the repository.
2. Navigate to the "server" folder and run `npm install` to install server dependencies.
3. Navigate to the "client" folder and run `npm install` to install client dependencies.

## Usage

1. Start the Express server by navigating to the "server" folder and running `npm start`.
2. Start the React client by navigating to the "client" folder and running `npm start`.
3. Access the application at `http://localhost:3000` in your browser.

## Hosting on Render.com

This project is hosted on [Render.com](https://render.com/). You can easily deploy your Post-it-All application on Render.com by following these steps:

1. [Create an account on Render.com](https://render.com/signup).
2. [Create a new web service](https://render.com/docs/deploy-react) and link it to your project repository.
3. Configure the deployment settings as needed.
4. Deploy your application, and it will be live at your Render.com domain.

## Stretch Goals

- **Post Likes**: Allow users to like posts and see the like count increase.
- **Delete Posts**: Implement functionality to allow users to delete their posts.
- **Category Filtering**: Enable users to filter posts by category using query strings or dedicated routes.

Feel free to explore, contribute, and share your experiences with Post-it-All!

Happy Posting! 🚀
