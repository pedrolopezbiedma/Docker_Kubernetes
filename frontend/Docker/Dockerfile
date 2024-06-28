###### Build Phase ######
### ---------- ###
### Base image ###
### ---------- ###
FROM node:16-alpine as builder

### --------------------------------------- ###
### What needs to happen to build the image ###
### --------------------------------------- ###
WORKDIR /usr/apps/frontend

# Copy the package.json file so dependecies can be installed
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy project files into directory
COPY ./ ./

### ------------------------------------------------ ###
### Command to be executed when the container starts ###
### ------------------------------------------------ ###
CMD ["npm", "run", "start"]

###### Run Phase ######
### ---------- ###
### Base image ###
### ---------- ###
FROM nginx:1.21-alpine

### --------------------------------------- ###
### What needs to happen to build the image ###
### --------------------------------------- ###
# Copy the build folder from the builder phase
COPY --from=builder /usr/apps/frontend/build /usr/share/nginx/html

### ------------------------------------------------ ###
### Command to be executed when the container starts ###
### ------------------------------------------------ ###
# No need to specify a command, the default command for the nginx image is to start the server