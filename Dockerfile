# Use an official Node runtime as the base image
FROM node:16

# Set the working directory in the Docker image
WORKDIR /Users/onyx/Developer/schrodinger

# Copy package.json and package-lock.json into the image
COPY package*.json ./

# Install dependencies in the image
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Make port 3001 available to the world outside the Docker image
EXPOSE 3001

# Define the command to run the app
CMD ["npm", "start"]