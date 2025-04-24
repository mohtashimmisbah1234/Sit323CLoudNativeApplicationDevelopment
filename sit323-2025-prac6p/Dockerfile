
FROM node:18

# Setting the working directory
WORKDIR /usr/src/app

# Copying the package files and install dependencies
COPY package*.json ./
RUN npm install

# Copys the rest of the app code
COPY . .

# Expose port 
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
