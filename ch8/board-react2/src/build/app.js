React = require('react')
ReactDOM = require('react-dom')
request = require('request')

Header = require('./components.js').Header
Footer = require('./components.js').Footer
MessageBoard = require('./components.js').MessageBoard

ReactDOM.render(React.createElement(Header, null), document.getElementById('header'))
ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'))
ReactDOM.render(React.createElement(MessageBoard, {messages: messages}), document.getElementById('message-board'))
