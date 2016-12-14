const React = require('react')
const {render} = require ('react-dom')
const Backbone = require ('backbone')

const Content = require('./content.jsx')
const About = require('./about.jsx')
const Contact = require('./contact.jsx')
const Login = require('./login.jsx')
const Post = require('./post.jsx')
const Posts = require('./posts.jsx')

const posts = require('../posts.js')

const jQuery = require('jquery')
let content = document.getElementById('content')
const Router = Backbone.Router.extend({
  routes: {
    ''    : 'index',
    'about' : 'about',
    'posts' : 'posts',
    'posts/:id' : 'post',
    'contact' : 'contact',
    'login': 'login'
  },
  index: function() {
    render(<Content router={router}/>, content)
  },
  about: function() {
    render(<Content>
      <About/>
    </Content>, content)
  },
  posts: function() {
    render(<Content>
      <Posts posts={posts}/>
    </Content>, content)
  },
  post: function(id) {
    render(<Content>
      <Post id={id} posts={posts}/>
    </Content>, content)
  },
  contact: function() {
    render(<Content>
      <Contact />
    </Content>, content)
  },
  login: function() {
    render(<Login />, content)
  }

})

let router = new Router()

Backbone.history.start()