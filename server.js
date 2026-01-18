const express = require('express')
const cors = require('cors')

const appRoute = require('./src/routes/index.js')
const { loadDB } = require('./utils/jsonDB.js')

const app = express()
const port = 3000


let posts = [];

const corsOptions = {
  origin: ['http://localhost:5173', 'https://macthieuminh.github.io'],
  optionsSuccessStatus: 200,
  methods: 'GET,PUT,PATCH,POST,DELETE'
}

app.use(cors(corsOptions)) 

loadDB().then(dbData => posts = dbData)


app.use('/api', cors(corsOptions), appRoute)

app.listen(port, function () {
  console.log('server listening on port' + port)
})
