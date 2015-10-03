var express = require('express'),
  mongodb = require('mongodb'),
  app = express(),
  bodyParser = require('body-parser'),
  validator = require('express-validator'),
  logger = require('morgan'),
  errorHandler = require('errorhandler'),
  compression = require('compression'),
  exphbs  = require('express-handlebars'),
  url = 'mongodb://localhost:27017/board',
  React = require('react/addons'),
  components = require('./public/js/app.js'),
  Header = React.createFactory(components.Header),
  Footer = React.createFactory(components.Footer)
  MessageBoard = React.createFactory(components.MessageBoard)

mongodb.MongoClient.connect(url, function(err, db) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  app.use(compression())
  app.use(logger('combined'))
  app.use(errorHandler())
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(validator())
  app.use(express.static('public'))
  app.engine('handlebars', exphbs())
  app.set('view engine', 'handlebars')

  app.use(function(req, res, next){
    req.messages = db.collection('messages')
    return next()
  })

  app.get('/messages', function(req, res, next) {
    req.messages.find({}, {sort: {_id: -1}}).toArray(function(err, docs){
      if (err) return next(err)
      return res.json(docs)
    })
  })
  app.post('/messages', function(req, res, next){
    console.log(req.body)
    req.checkBody('message', 'Invalid message in body').notEmpty().isAlphanumeric();
    req.checkBody('name', 'Invalid name in body').notEmpty().isAlphanumeric();
    var errors = req.validationErrors()
    if (errors) return next(errors)
    req.messages.insert(req.body, function (err, result) {
      if (err) return next(err)
      return res.json(result.ops[0])
    })
  })

  app.get('/', function(req, res, next){
    req.messages.find({}, {sort: {_id: -1}}).toArray(function(err, docs){
      if (err) return next(err)
      // docs=[]
      res.render('index', {
        header: React.renderToString(Header()),
        footer: React.renderToString(Footer()),
        messageBoard: React.renderToString(MessageBoard({messages: docs})),
        props: '<script type="text/javascript">var messages='+JSON.stringify(docs)+'</script>'
        // messageBoard: React.renderToString(MessageBoard({messages: [{_id:1, name: 'azat', message: 'hey'}]}))
      })
    })
  })

  app.listen(5000)
})
