React = require('react')
ReactDOM = require('react-dom')
request = require('request')

Header = require('./components.js').Header
Footer = require('./components.js').Footer
MessageBoard = require('./components.js').MessageBoard

ReactDOM.render(<Header />, document.getElementById('header'))
ReactDOM.render(<Footer />, document.getElementById('footer'))
ReactDOM.render(<MessageBoard messages={messages}/>, document.getElementById('message-board'))
