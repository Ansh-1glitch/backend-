// index.js - Main entry point for our Express server

// 1. Import Express
const express = require('express');

// 2. Create an Express application
const app = express();

// 3. Define the PORT
//    - process.env.PORT is used by hosting platforms like Render
//    - If no environment variable is set, fallback to 3000 (for local dev)
const PORT = process.env.PORT || 3000;

// 4. Route: GET /
//    When someone visits the root URL, send back a JSON response
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to my Express API Ansh! 🚀',
    status: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// 5. Route: GET /about
//    When someone visits /about, send back info about this project
app.get('/about', (req, res) => {
  res.json({
    success: true,
    project: 'My First Express Backend',
    author: 'Your Name',
    version: '1.0.0',
    description: 'A simple Node.js + Express REST API',
    routes: [
      { method: 'GET', path: '/',      description: 'Home route' },
      { method: 'GET', path: '/about', description: 'About route' }
    ]
  });
});
// 6. Start the server
//    app.listen() starts the server and makes it listen on the given PORT
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
  console.log(`📌 Press Ctrl+C to stop the server`);
});
