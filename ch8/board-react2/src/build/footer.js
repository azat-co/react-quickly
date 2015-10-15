React = require('react')

module.exports = Footer = React.createClass({displayName: "Footer",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("hr", null), 
        React.createElement("div", {className: "row-fluid"}, 
          React.createElement("div", {className: "span12"}, 
            React.createElement("div", null, "The React.js Course by Azat (", React.createElement("a", {href: "http://twitter.com/azat_co", target: "_blank"}, "@azat_co"), ")")
          )
        )
      )
    )
  }
})
