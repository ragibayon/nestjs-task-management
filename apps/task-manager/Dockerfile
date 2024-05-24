# Stage 1: Development
FROM node:alpine as development

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all other source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:alpine as production

# Set environment variable
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install production dependencies
COPY package.json package-lock.json ./
RUN npm install --omit=dev

# Copy build artifacts from development stage
COPY --from=development /usr/src/app/dist ./dist

# Command to run the application
CMD ["node", "dist/apps/task-manager/main.js"]
