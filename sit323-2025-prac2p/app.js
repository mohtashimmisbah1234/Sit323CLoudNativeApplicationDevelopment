const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample users data
let users = [ 
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'James' } // New user hasa been added
];

// This is the root route
app.get('/', (req, res) => {
  res.send('Hello, welcome to the User API! Use /users to interact with the API.');
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Create a new user
app.post('/users', (req, res) => {
  const newUser = req.body; // Get user data from request body
  users.push(newUser); // Add new user to the users array
  res.status(201).json(newUser); // Respond with the created user (201 Created status code)
});

// Update an existing user
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id); // Extract user ID from URL parameters
  const updatedUser = req.body; // Get updated user data from request body

  // Replace the existing user data with updated data
  users = users.map(user => user.id === userId ? updatedUser : user);

  res.status(200).json(updatedUser); // Respond with the updated user data
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id); // Extract user ID from URL parameters

  // Find index of the user to delete
  const index = users.findIndex(user => user.id === userId);
  
  if (index === -1) {
    return res.status(404).json({ error: "User not found" }); // Respond with 404 if user not found
  }

  // Remove user from array
  users.splice(index, 1); 

  res.status(204).send(); // Respond with 204 No Content (successful deletion)
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
