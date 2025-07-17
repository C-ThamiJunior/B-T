FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to leverage Docker cache
# This step helps in faster builds if dependencies haven't changed
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React Vite application for production
# This command will generate the production-ready static files in the 'dist' directory
RUN npx vite build

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

# Copy the custom Nginx configuration file
# This configuration typically serves the static files from the 'dist' directory
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React application from the 'build' stage to Nginx's public directory
# The 'dist' folder contains the optimized static assets
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80, the default HTTP port where Nginx will serve the app
EXPOSE 80

# Command to run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

