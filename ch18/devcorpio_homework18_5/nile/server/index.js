const path = require('path')
const express = require('express')
const {
  PORT = 3000
} = process.env
const app = express()

app.use(express.static('dist'))

app.use('*', (req, res) => {
  res.sendFile(path.resolve('index.html'))
})

app.listen(PORT, () => {
  console.log('Server listening in http://localhost:' + PORT)
})
