FROM node:latest
WORKDIR /build

COPY tsconfig*.json package*.json ./

RUN npm install

COPY . ./

RUN npm run build


FROM quay.io/mohamedf0/serve

COPY --from=build /build/dist/document-management /app

CMD ["serve", "-s", "-p", "80", "/app"]

EXPOSE 80
