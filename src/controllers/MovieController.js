import e, * as express from 'express';
import MovieRepo from '../repository/MovieRepo.js';
import fetch from 'node-fetch';
import authenticateRole from '../services/authenticateRole.js'
import authenticateJWT from '../services/authenticateToken.js'
const router = express.Router();

router.get('/',authenticateJWT, async (req, res) => {
  const repo = new MovieRepo();

  try {
  const collection = await repo.getAllRecords();
    return res.status(200).json(collection);
  } catch (err) {
    console.log(err);
    res.send(err);
    return res.status(500).end();
  }
});

router.post('/',authenticateJWT,async (req, res) => { 

  if (authenticateRole(req) === 'basic') {
    const repo = new MovieRepo();
    try {
      const collection = await repo.getCountOfRecordsCreatedByBasicUserInCurrentMonth();

      if( collection.count >= 5 ) {
        return res.status(403).json({message: 'Basic user can create only 5 records per month.'}).end();
      }
       
      } catch ( err ) {
        console.log(err);
        res.send(err);
        return res.status(500).end();
      }
  }

  fetch(`http://www.omdbapi.com/?t=${req.body.title}&apikey=e546ae44`)
  .then(res => res.json())
  .then(json => {
    const repo = new MovieRepo();
    if (!req.body.title) {
      return res.status(400).json({
        message: `Title is missing`,
      });
    }

    if(json.Error) {
      return res.status(500).json({
        message: json.Error,
      });
    }

    const movieToSave = {
      Title: json.Title,
      Director: json.Director,
      Released: json.Released,
      Genre: json.Genre,
      createdBy: authenticateRole(req)
    }

    try {
      const collection = repo.create(movieToSave)
      return res.status(201).json(collection);
    } catch (err) {
      console.log(err);
      return res.status(500).end();
    }
  }).catch(err => console.error(err));
});

export default router;