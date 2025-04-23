# Use an official Node.js slim image 
FROM node:18-slim

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Expose port 3000 inside the container (it is optional for documentation, not required by Cloud Run)
EXPOSE 3000

# Run the app using npm start (assumes start script is defined in package.json)
CMD ["npm", "start"]
