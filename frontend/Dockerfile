# build environment
FROM node:15.13.0-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# runtime environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]