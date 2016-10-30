const path = require('path')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const {
  PORT = 3000,
  PWD = __dirname
} = process.env
const app = express()

app.use('/q', graphqlHTTP(req => ({
  schema,
  context: req.session
})))


app.use('/dist', express.static(path.resolve(PWD, 'build', 'public')))

// app.use('/build/:file', (req, res) => {
//   res.sendFile(req.params.file, {
//     root: path.resolve(PWD, 'build')
//   })
// })

app.use('*', (req, res) => {
  res.sendFile('index.html', {
    root: PWD
  })
})

app.listen(PORT, () => console.log(`Running server on port ${PORT}`))
