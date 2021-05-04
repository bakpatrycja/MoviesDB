FROM node:14.15-alpine

WORKDIR /app
COPY ./config ./config
COPY ./migrations ./migrations
COPY ./seeders ./seeders
COPY ./models ./models
COPY ./package.json ./package-lock.json ./
RUN npm install
RUN npm install --only=dev

RUN mkdir ./src
COPY ./src ./src

CMD ["npm", "start"]