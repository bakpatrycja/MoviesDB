const { authFactory, AuthError } = require("../services/authenticateCreateToken");
import { app } from '../server.js';
import request from 'supertest';
const requestApp = request(app);
let expect = require("chai").expect;
let chai = require('chai')
chai.use(require('chai-json-schema'));
require('dotenv').config()

const { BASIC_USERNAME, BASIC_PASSWORD, PREMIUM_USERNAME, PREMIUM_PASSWORD } = process.env;

const generateToken = (username, password) => {
    const { JWT_SECRET } = process.env;
    const auth = authFactory(JWT_SECRET);
    return auth(username, password)
}

describe('MovieController file', function() {
    describe('Check request methods (post and get) on endpoint /movies.', function() {
       it('should check record structure and if authorized user can read records', async () => {

         const exampleTokenValid = {
             headers: {
                 authorization: 'Bearer ' + generateToken(BASIC_USERNAME, BASIC_PASSWORD)
             }
         } 
     
         let objectSchema = {
           title: 'Movie record schema',
           type: 'array',
           required: ['id','Director','Genre','Released','Title','createdAt','updatedAt'],
           properties: {
                   id: {
                     type: 'number'
                   },
                   Director: {
                     type: 'string'
                   },
                   Genre: {
                     type: 'string'
                   },
                   Released: {
                     type: 'string'
                   },
                   Title: {
                     type: 'string'
                   },
                   createdAt: {
                     type: 'string'
                   },
                   updatedAt: {
                     type: 'string'
                   }
                 }
           }
       
         const response = await requestApp.get('/movies').set('authorization', exampleTokenValid.headers.authorization);
         const dataFromDatabaseToCheck = response.body;
         expect(dataFromDatabaseToCheck).to.be.jsonSchema(objectSchema);
       });


       it('should check if unauthorized user cant read records', async () => {
        const exampleTokenInvalid = {
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6IkJhc2ljIFRob21hcyIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTYwNjIyMTgzOCwiZXhwIjoxNjA2MjIzNjM4LCJpc3MiOiJodHRwczovL3d3dy5uZXRndXJ1LmNvbS8iLCJzdWIiOiIxMjMifQ.KjZ3zZM1lZa1SB8U-W65oQApSiC70ePdkQ7LbAhpUQg'
            }
        }   
        const response = await requestApp.get('/movies').set('authorization', exampleTokenInvalid.headers.authorization)
       expect(response.status).to.be.oneOf([401, 403]);
      });

      it('should check if authorized premium user can create record. Those kind of tests should be done on test database.', async () => {
        const exampleTokenValid = {
            headers: {
                authorization: 'Bearer ' + generateToken(PREMIUM_USERNAME, PREMIUM_PASSWORD)
            }
        }

        const response = await requestApp.post('/movies')
        .set('authorization', exampleTokenValid.headers.authorization)
        .set('content-type', 'application/json')
        .send({title: 'Gone with the wind'})
        expect(response.status).to.equal(201);
      });


      it('should check if authorized basic user can create record. Those kind of tests should be done on test database.', async () => {
        const exampleTokenValid = {
            headers: {
                authorization: 'Bearer ' + generateToken(BASIC_USERNAME, BASIC_PASSWORD)
            }
        }

        const response = await requestApp.post('/movies')
            .set('authorization', exampleTokenValid.headers.authorization)
            .set('content-type', 'application/json')
            .send({title: 'Gone with the wind'})
        expect(response.status).to.equal(201);
      });

      it('should check if authorized basic user cant create record after 5 times. Those kind of tests should be done on test database.', async () => {
        const exampleTokenValid = {
            headers: {
                authorization: 'Bearer ' + generateToken(BASIC_USERNAME, BASIC_PASSWORD)
            }
        }

        let response;
        for (let x = 0; x < 6 ; x++) {
             response = await requestApp.post('/movies')
            .set('authorization', exampleTokenValid.headers.authorization)
            .set('content-type', 'application/json')
            .send({title: 'Gone with the wind'})
        }
        expect(response.status).to.equal(403);
        expect(response.text).to.equal('{"message":"Basic user can create only 5 records per month."}');
      });
    });
 });