# Development Dockerfile with hot-reload support
FROM node:20-alpine

WORKDIR /app

# Install dependencies for better DX
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Set environment variables for development
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_USEPOLLING=true

# Start development server with hot reload
CMD ["npm", "run", "dev"]
