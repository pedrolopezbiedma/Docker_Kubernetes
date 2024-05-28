### Specify the base image ###
FROM node:14-alpine

### Specify what needs to happen ###

# Copy the files into the image
COPY /. /.

# Install the dependencies
RUN npm install

### Specify the command to run once the container is already started ###
CMD ["npm", "start"]