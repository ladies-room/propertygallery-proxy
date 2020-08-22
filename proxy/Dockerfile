# Use Node as a parent image
FROM node:12.18-alpine3.9

RUN mkdir -p /src/proxy

# Copy the current directory contents into the container at
COPY . /src/proxy

# Set the working directory to
WORKDIR /src/proxy

COPY package.json ./

# install dependencies
RUN npm install