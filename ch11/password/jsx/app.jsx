const React = require('react')
const ReactDOM = require('react-dom')
const Password = require('./password.jsx')

ReactDOM.render(<Password
    upperCase={true}
    lowerCase={true}
    special={true}
    number={true}
    over6={true}/>,
  document.getElementById('password'))
