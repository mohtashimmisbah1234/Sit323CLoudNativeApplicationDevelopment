# Using the official Node.js image from Docker Hub
FROM node:18

# Creating and setting the working directory inside the container
WORKDIR /usr/src/app

# Copying the dependency files
COPY package*.json ./

# Installing the dependencies
RUN npm install

# This Copies the rest of the app
COPY . .

# Expose port (matches the one in app.js)
EXPOSE 3000

# The cooommand to run the app
CMD ["node", "app.js"]
