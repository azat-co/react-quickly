require('../css/main.css')

const React = require('react')
const ReactDOM = require ('react-dom')
const Content = require('./content.jsx')


ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
