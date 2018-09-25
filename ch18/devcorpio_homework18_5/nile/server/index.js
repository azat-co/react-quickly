const path = require('path')
const express = require('express')
const mongodb = require('mongodb')
const {
  PORT = 3000
} = process.env

const app = express()

let db;

mongodb.MongoClient.connect('mongodb://localhost:27017/nilestore', (err, database) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }

  db = database

  app.listen(PORT, () => {
    console.log('Server listening in http://localhost:' + PORT)
  })
})

app.use(express.static('dist'))

app.get('/api/products', (req, res, next) => {
  db.collection('products').find({}).toArray(function(err, items) {
    if (err) {
      return next(err)
    }

    res.json(items)
  })
})

app.use('*', (req, res) => {
  res.sendFile(path.resolve('index.html'))
})

app.use((err, req, res, next) => {
  console.log(err)
})


