### Base image ###
FROM node:14-alpine

### What needs to happen to build the image ###
# Specify the working directory
WORKDIR /usr/apps/simple-web

# Copy the files into the image
COPY ./ ./

# Install the dependencies
RUN npm install

### Command to run once the container is already started ###
CMD ["npm", "start"]