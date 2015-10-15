React = require('react')
ReactDOM = require('react-dom')
request = require('request')

Autocomplete = require('./autocomplete.js')

ReactDOM.render(<Autocomplete options={rooms}/>, document.getElementById('autocomplete'))
