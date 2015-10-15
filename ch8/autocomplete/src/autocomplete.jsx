React = require('react')
ReactDOM = require('react-dom')
request = require('request')

var url = 'http://localhost:3000/messages'
var fD = ReactDOM.findDOMNode

module.exports = React.createClass({
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
      <div className="form-group">
        <input type="text" className="form-control" onChange={this.filter}></input>
        {this.state.options.map(function(option, index, list){
          return <div key={index}><a className="btn  btn-default" href="/#/{option}" target="_blank">#{option}</a></div>
        })}
        {function(){if (this.state.options.length == 0)
          return <a className="btn btn-info" onClick={this.addOption} value={this.state.currentOption}>Add #{this.state.currentOption}</a>
        }.bind(this)()}
      </div>
    )
  }
})
