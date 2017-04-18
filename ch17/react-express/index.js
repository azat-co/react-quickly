const fs = require('fs')
const express = require('express')
const app = express()
const errorHandler = require('errorhandler')
const http = require('http')
const https = require('https')

const httpPort = 3000
const httpsPort = 443

const React = require('react')
require('babel-register')({
  presets: [ 'react' ]
})
const ReactDOMServer = require('react-dom/server')
const About = React.createFactory(require('./components/about.jsx'))

app.set('view engine', 'hbs')
app.get('/', (request, response, next) => {
  response.send('Hello!')
})
app.get('/about', (request, response, next) => {
  const aboutHTMl = ReactDOMServer.renderToString(About())
  response.render('about', {about: aboutHTMl})
})

// app.get('/about', (request, response, next) => {
//   response.send(`<div>
//   <a href="http://Node.University" target="_blank">Node.University</a>
//    is home to top-notch Node education which brings joy to JavaScript engineers.
// </div>`)
//})

app.all('*', (request, response, next) => {
  response.status(404).send('Not found... did you mean to go to /about instead?')
})
app.use((error, request, response, next) => {
  console.error(request.url, error)
  response.send('Wonderful, something went wrong...')
})

app.use(errorHandler)

http.createServer(app)
  .listen(httpPort, ()=>{
    console.log(`HTTP server is listening on ${httpPort}`)
  })


try {
  const options = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt')
  }
} catch (e) {
  console.warn('Cannot start HTTPS. \nCreate server.key and server.crt for HTTPS.')
}
if (typeof options != 'undefined')
  https.createServer(app, options)
    .listen(httpsPort, ()=>{
      console.log(`HTTPS server is listening on ${httpsPort}`)
    })
