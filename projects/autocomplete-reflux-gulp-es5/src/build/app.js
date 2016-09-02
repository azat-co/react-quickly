React = require('react')
ReactDOM = require('react-dom')
request = require('request')

Autocomplete = require('./autocomplete.js')

ReactDOM.render(React.createElement(Autocomplete, {options: rooms, url: url}), document.getElementById('autocomplete'))
