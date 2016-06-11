var http = require('http'),
  forecastData = require('./response.json')

http.createServer(function(request, response){
  response.end(JSON.stringify(forecastData))
}).listen(3000)
