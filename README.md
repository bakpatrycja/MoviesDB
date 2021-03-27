
# Netguru recruitment task - Movie API 

This project is a recruitment task for Netguru company. It allows to store and create records based on omdbAPI. 

## Movie API Documentation

https://app.swaggerhub.com/apis-docs/bak7patrycja/MovieAPI/1.0.0

## Software requeriments and additional informations

You need to have `docker`, `npm`, `node js` and `docker-compose` installed on your computer to run the service. By default the auth service and server will start on port `3000`.
If you want go to MyPhpAdmin please just type this adress: http://localhost:5426/. Password and login are defined in .env file. MyPhpAdmin is a place where you can work on records and databased. .env file should be never ever shared on github, but for recruitment purpose i decided to share it with all files. 

## Run locally

Clone this repository

Run this command to install all packages in cloned repository:
```
npm install
```

To build project please use one of those commans:
```
JWT_SECRET=secret docker-compose up -d
```

or 
```
JWT_SECRET=secret docker-compose up --build
```

To test project please follow steps:

```
docker ps
```
Please copy id of container named "nodejs-recruitment-task_app_1", then run next command:

```
docker exec <id_of_container> npm test
```

Keep in mind that all tests are done on main database, so you will need to remove manually all records created by basic user (basic user can create only 5 records per month). To remove records please go to MyPhpAdmin. In a real world application a test database would be used instead.

Another way to create valid token is curl. 
```
curl --location --request POST 'localhost:3000/auth' \
--header 'Content-Type: application/json' \
--data-raw '{"username": "basic-thomas","password": "sR-_pcoow-27-6PAwCD8"}'
```

**Important! If you have any errors caused by commands please use git bash on Windows instead of cmd. Bash commands are not recognized by cmd.**

## Users

The auth service defines two user accounts that could be used in project.

1. `Basic` user 
Rights:
- create 5 records per current month
- read records from database

```
 username: 'basic-thomas'
 password: 'sR-_pcoow-27-6PAwCD8'
```

1. `Premium` user
Rights:
- create unlimited amount records
- read records from database
```
username: 'premium-jim'
password: 'GBLtTyq3E_UNjFnpo9m6'
```