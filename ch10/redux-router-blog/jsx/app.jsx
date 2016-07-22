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
const {withRouter} = require('react-router')


const axios = require('axios')
class Store {
  constructor() {
    this.posts = null
    axios.get('/ch10/naive-store/posts.json')
      .then(response=>response.data)
      .then(postsResponse=>{
        console.log(postsResponse)
        this.posts = postsResponse
      })
      .catch(response=>console.error(response))
  }
  getPosts() {
    return this.posts
  }
}
let store = new Store()

let { Router,
  Route,
  Link
} = ReactRouter

let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
  queryKey: false
})

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Content} >
      <Route path="/about" component={About} />
      <Route path="/posts" component={Posts} store={store}/>
      <Route path="/posts/:id" component={Post}  store={store}/>
      <Route path="/contact" component={withRouter(Contact)} />
    </Route>
    <Route path="/login" component={Login}/>
  </Router>
), document.getElementById('content'))