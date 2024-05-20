# Use existing docker image as a base.
FROM alpine

# Download and install a dependency.
RUN apk add --update redis

# Tell the image what to do when the container is already started. ( But it doesn't execute it when the image is created.)
CMD ["redis-server"]