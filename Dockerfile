FROM node:14.15-alpine

WORKDIR /app
COPY ./config ./
COPY ./migrations ./
COPY ./seeders ./
COPY ./models ./
COPY package*.json ./
RUN npm install

RUN mkdir ./src
COPY ./src ./src

CMD [ "npm", "prestart" ]