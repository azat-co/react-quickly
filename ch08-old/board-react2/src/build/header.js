React = require('react')

module.exports = Header = React.createClass({displayName: "Header",
  render: function(){
    return (
      React.createElement("h1", null, "Message Board")
    )
  }
})
