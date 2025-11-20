FROM node:22 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/root/.npm npm i

COPY . .

RUN npm run build:prod


FROM nginx:1.29.3-alpine

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY --from=build /app/dist/* /var/www/lordgasmic

EXPOSE 4200

#ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]
CMD ["nginx", "-g", "daemon off;"]
