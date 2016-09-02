React = require('react')
ReactDOM = require('react-dom')

const Autocomplete = require('./autocomplete.jsx')

ReactDOM.render(<Autocomplete options={rooms} url={url}/>, document.getElementById('autocomplete'))
