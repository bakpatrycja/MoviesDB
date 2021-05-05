  

# Movie API

  

This project is a recruitment task for Netguru company. It allows to store and create records based on omdbAPI.

  

## Movie API Documentation

  

https://app.swaggerhub.com/apis-docs/bak7patrycja/MovieAPI/1.0.0

  

## Software requeriments and additional informations

  

You need to have `docker`, `npm`, `node js` and `docker-compose` installed on your computer to run the service. By default the auth service and server will start on port `3000` (dev) , `3001` (test).

If you want go to MyPhpAdmin please just type this adress: http://localhost:5426/ (dev) http://localhost:5427/ (test). Example password and login are defined in example.env file and example.test.env file. MyPhpAdmin is a place where you can work on records and databased.

  

## Run locally

  

Clone this repository and remove example from example.env

  

Run this command to install all packages in cloned repository:

```

npm install

```

  

To build project please use one of those commans:


DEV INSTANCE
```
JWT_SECRET=secret PORT=3000 docker-compose -f docker-compose.yml up --build
```
TEST INSTANCE
```
JWT_SECRET=secret PORT=3001 docker-compose -f docker-compose.test.yml up --build
```


MIGRATIONS



DEV INSTANCE
```
docker exec appdev npx sequelize-cli db:migrate --env development
```
TEST INSTANCE
```
docker exec apptest npx sequelize-cli db:migrate --env test
```
 If you wish add automatically first record please use command:

 DEV INSTANCE
```
docker exec appdev npx sequelize-cli db:seed:all --env development
```
TEST INSTANCE
```
docker exec apptest npx sequelize-cli db:seed:all --env test
```


To test project on test enviroment please use command:

```

docker exec apptest npm test

```


  

Another way to create valid token is curl.

```

curl --location --request POST 'localhost:3000/auth' \

--header 'Content-Type: application/json' \

--data-raw '{"username": "basic-thomas","password": "sR-_pcoow-27-6PAwCD8"}'

```

  

**Important! If you have any errors caused by commands please use git bash on Windows instead of cmd. Bash commands are not recognized by cmd.**

  

## Users

  

The auth service defines two user accounts that could be used in project.

  

1.  `Basic` user

Rights:

- create 5 records per current month

- read records from database

  

```

username: 'basic-thomas'

password: 'sR-_pcoow-27-6PAwCD8'

```

  

1.  `Premium` user

Rights:

- create unlimited amount records

- read records from database

```

username: 'premium-jim'

password: 'GBLtTyq3E_UNjFnpo9m6'

```