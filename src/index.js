import { app } from './server.js'
require('dotenv').config()
const { PORT } = process.env

app.listen(PORT, () => {
  console.log(`auth svc running at port ${PORT}`)
})
