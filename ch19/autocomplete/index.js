
const express = require('express'),
  mongodb = require('mongodb'),
  app = express(),
  bodyParser = require('body-parser'),
  validator = require('express-validator'),
  logger = require('morgan'),
  errorHandler = require('errorhandler'),
  compression = require('compression'),
  exphbs  = require('express-handlebars'),
  url = 'mongodb://localhost:27017/autocomplete',
  ReactDOM = require('react-dom'),
  ReactDOMServer = require('react-dom/server'),
  React = require('react')

require('babel-register')({
  presets: [ 'react' ]
})

const Autocomplete  = React.createFactory(require('./src/autocomplete.jsx')),
  port = 3000


mongodb.MongoClient.connect(url, function(err, db) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  app.use(compression())
  app.use(logger('dev'))
  app.use(errorHandler())
  app.use(bodyParser.json())
  app.use(validator())
  app.use(express.static('public'))
  app.engine('handlebars', exphbs())
  app.set('view engine', 'handlebars')

  app.use(function(req, res, next){
    req.rooms = db.collection('rooms')
    return next()
  })

  app.get('/rooms', function(req, res, next) {
    req.rooms.find({}, {sort: {_id: -1}}).toArray(function(err, docs){
      if (err) return next(err)
      return res.json(docs)
    })
  })
  app.post('/rooms', function(req, res, next){
    req.checkBody('name', 'Invalid name in body').notEmpty()
    var errors = req.validationErrors()
    if (errors) return next(errors)
    req.rooms.insert(req.body, function (err, result) {
      if (err) return next(err)
      return res.json(result.ops[0])
    })
  })

  app.get('/', function(req, res, next){
    var url = 'http://localhost:' + port + '/rooms'
    req.rooms.find({}, {sort: {_id: -1}}).toArray(function(err, rooms){
      if (err) return next(err)
      res.render('index', {
        autocomplete: ReactDOMServer.renderToString(Autocomplete({
          options: rooms,
          url: url
        })),
        data: `<script type="text/javascript">
                window.__autocomplete_data = {
                  rooms: ${JSON.stringify(rooms, null, 2)},
                  url: "${url}"
                }
              </script>`
      })
    })
  })

  app.listen(port)
})
