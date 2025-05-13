# syntax=docker/dockerfile:1.15.0

FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]