import fetch from 'node-fetch'

require('dotenv').config()
const { OMDB_API_KEY } = process.env

export class omdbError extends Error {}

const omdbApi = (title, role) => (fetch(`http://www.omdbapi.com/?t=${title}&apikey=${OMDB_API_KEY}`)
  .then(res => res.json())
  .then(json => {
    if (json.Error) {
      throw new omdbError(json.Error)
    }

    return {
      Title: json.Title,
      Director: json.Director,
      Released: json.Released,
      Genre: json.Genre,
      createdBy: role
    }
  }))

export default omdbApi
