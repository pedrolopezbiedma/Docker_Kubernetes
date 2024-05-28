### ---------- ###
### Base image ###
### ---------- ###
FROM node:16-alpine

### --------------------------------------- ###
### What needs to happen to build the image ###
### --------------------------------------- ###
WORKDIR /usr/apps/visits

# Copy the package.json file so dependecies can be installed
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy project files into directory
COPY ./ ./

### ------------------------------------------------ ###
### Command to be executed when the container starts ###
### ------------------------------------------------ ###
CMD ["npm", "start"]