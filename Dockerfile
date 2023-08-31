FROM node:18-alpine

ARG PORT=3000

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD node dist/server.js

EXPOSE 3000


