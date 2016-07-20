const React = require('react')
const ReactDOM = require ('react-dom')
const ReactRouter = require('react-router')
const History = require('history')

const Content = require('./content.jsx')
const About = require('./about.jsx')
const Contact = require('./contact.jsx')
const Login = require('./login.jsx')
const Post = require('./post.jsx')
const Posts = require('./posts.jsx')


const posts = require('../posts.js')

let { Router,
  Route,
  Link
} = ReactRouter

let history = ReactRouter.useRouterHistory(History.createHashHistory)({ queryKey: false })
// console.log(Content);
ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={Content} >
      <Route path="/about" component={About} />
      <Route path="/posts" component={Posts} posts={posts}/>
      <Route path="/posts/:id" component={Post}  posts={posts}/>
      <Route path="/contact" component={Contact} />
    </Route>
    <Route path="/login" component={Login}/>
  </Router>
), document.getElementById('content'))