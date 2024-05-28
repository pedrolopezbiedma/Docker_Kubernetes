### ---------- ###
### Base image ###
### ---------- ###
FROM node:14-alpine

### --------------------------------------- ###
### What needs to happen to build the image ###
### --------------------------------------- ###
# Specify the working directory
WORKDIR /usr/apps/simple-web

# Copy the package.json
COPY ./package.json ./

# Install the dependencies
RUN npm install

# Copy the files into the image after installing dependencies so we don't install them if files change
COPY ./ ./

### ---------------------------------------------------- ###
### Command to run once the container is already started ###
### ---------------------------------------------------- ###
CMD ["npm", "start"]