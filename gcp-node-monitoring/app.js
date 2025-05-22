const express = require('express');
const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Hello from Node.js on GCP Kubernetes!');
});

// Health check route (optional for monitoring)
app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
