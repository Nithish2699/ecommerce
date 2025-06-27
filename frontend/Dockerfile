# Stage 1: Build React app
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx on port 8080 (for Cloud Run compatibility)
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Set Nginx to listen on 8080
RUN sed -i 's/80;/8080;/g' /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
