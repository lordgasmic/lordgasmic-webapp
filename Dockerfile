FROM node:22 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .

RUN npm run build:prod


FROM nginx:1.29.3-alpine AS runner

#COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/* /usr/share/nginx/html

EXPOSE 4200

ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]
CMD ["-g", "daemon off;"]
