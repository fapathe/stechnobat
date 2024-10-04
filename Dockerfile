FROM docker.io/node:latest AS build
WORKDIR /build

COPY tsconfig*.json package*.json ./

RUN npm install

COPY . ./

RUN npm run build


FROM quay.io/mohamedf0/serve

COPY --from=build /build/dist /app

CMD ["serve", "-s", "-p", "8080", "/app"]

EXPOSE 8080
