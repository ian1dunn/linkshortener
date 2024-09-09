# build environment
FROM node:15.13.0-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm build

# runtime environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/.nginx/ /etc/nginx/conf.d/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]