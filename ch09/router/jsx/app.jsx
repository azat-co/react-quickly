const React = require('react')
const ReactDOM = require ('react-dom')
const Router = require('./router.jsx')
const Content = require('./content.jsx')
const ReactRouter = require('react-router')
<script src="History.js"></script>

var products = {
  'express': '',
  'mongoose': 'Windows 95 (codenamed Chicago) is a consumer-oriented operating system developed by Microsoft. Windows 95 merged Microsoft\'s formerly separate MS-DOS and Windows products.',
  'nodeprogram': 'Graphical web browser'
}
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexLink = ReactRouter.IndexLink
// var history = window.History.createHistory()
var history = window.History.createHashHistory({
  queryKey: false
})

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={Content} >
      <Route path="/about" component={About} />
      <Route path="/products" component={Products}/>
      <Route path="/products/:id" component={Product} />
      <Route path="/contact" component={Contact} />
    </Route>
    <Route path="/login" component={Login}/>
  </Router>
), document.getElementById('content'))