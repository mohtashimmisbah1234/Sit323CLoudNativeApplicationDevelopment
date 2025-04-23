// Importing the Express framework
const express = require('express');
const app = express();
/*Here im using the environment variable PORT if available (for cloud), otherwise default to 3000 (for local dev) because it was causing cloud run issue when deploying because the cloud run expects
that the container must listen to port 8080 not 3000 and the cloud automatically sets the PORT=8000 as an eenvironmet variable.*/ 
const port = process.env.PORT || 3000;

// Defining the root route and response
app.get('/', (req, res) => {
  res.send('Hello from the microservice!');
});

// Starting the server, binding to 0.0.0.0 to allow external access (it is required by Cloud Run)
app.listen(port, '0.0.0.0', () => {
  console.log(`Microservice is running goood at http://localhost:${port}`);
});
