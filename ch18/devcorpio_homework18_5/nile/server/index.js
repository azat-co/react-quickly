const path = require('path')
const express = require('express')

const app = express()

app.use(express.static('dist'))

app.use('*', (req, res) => {
  res.sendFile(path.resolve('index.html'))
})

app.listen(3000)
