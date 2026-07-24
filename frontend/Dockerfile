FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server", "dist/frontend/browser", "-p", "8080"]