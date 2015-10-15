React = require('react')
ReactDOM = require('react-dom')
request = require('request')

var url = 'http://localhost:3000/messages'
var fD = ReactDOM.findDOMNode

module.exports = React.createClass({displayName: "exports",
  getInitialState: function(){
    return {options: this.props.options}
  },
  filter: function(e){
    this.setState({
      currentOption: e.target.value,
      options: (this.props.options.filter(function(option, index, list){
        return (e.target.value === option.substr(0, e.target.value.length))
      }))
    }, function(){
      console.log(this.state.options)
    })
  },
  addOption: function(e){
    // this.props.
  },
  render: function(){
    return (
      React.createElement("div", {className: "form-group"}, 
        React.createElement("input", {type: "text", className: "form-control", onChange: this.filter}), 
        this.state.options.map(function(option, index, list){
          return React.createElement("div", {key: index}, React.createElement("a", {className: "btn  btn-default", href: "/#/{option}", target: "_blank"}, "#", option))
        }), 
        function(){if (this.state.options.length == 0)
          return React.createElement("a", {className: "btn btn-info", onClick: this.addOption, value: this.state.currentOption}, "Add #", this.state.currentOption)
        }.bind(this)()
      )
    )
  }
})
