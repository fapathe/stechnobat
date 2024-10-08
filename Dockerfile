# Step 1: Build the Angular app
FROM docker.io/node:18 AS build
 AS build
WORKDIR /build

# Copy the necessary config and package files first to leverage Docker cache
COPY tsconfig*.json package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Angular app
RUN npm run build

# Step 2: Serve the app using serve package
FROM quay.io/mohamedf0/serve

# Copy the built files from the build stage
COPY --from=build /build/dist/est/browser /app

CMD ["serve", "-s", "-p", "80", "/app"]

EXPOSE 80
