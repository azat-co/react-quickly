const React = require('react'),
  ReactDOM = require('react-dom'),
  request = require('request')

const fD = ReactDOM.findDOMNode


class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {options: this.props.options,
      filteredOptions: this.props.options,
      currentOption: ''
    }
    this.filter = this.filter.bind(this)
    this.addOption = this.addOption.bind(this)

  }
  componentDidMount() {
    request({url: this.props.url}, (error, response, body) => {
      if(error || !body){
        return console.error('Failed to load')
      }
      body = JSON.parse(body)
      this.setState({options: body})
    })
  }
  filter(e) {
    this.setState({
      currentOption: e.target.value,
      filteredOptions: (this.state.options.filter(function(option, index, list){
        return (e.target.value === option.name.substr(0, e.target.value.length))
      }))
    }, function(){
    })
  }
  addOption(e) {
    var currentOption = this.state.currentOption
    let option = this.state.currentOption
    request({url: this.url,
      method: 'POST',
      json: {name: option}}, (error, response, body) => {
        if(error || !body){
          return console.error('Failed to save')
        }
        this.options.unshift(body)
        this.filter({target: {value: currentOption}})
    })
  }
  render() {
    return (
      React.createElement("div", {className: "form-group"}, 
        React.createElement("input", {type: "text", className: "form-control option-name", onChange: this.filter, value: this.currentOption, placeholder: "React.js"}), 
        this.state.filteredOptions.map(function(option, index, list){
          return React.createElement("div", {key: option._id}, React.createElement("a", {className: "btn btn-default option-list-item", href: '/#/'+option.name, target: "_blank"}, "#", option.name))
        }), 
        function(){if (this.state.filteredOptions.length == 0 && this.state.currentOption!='')
          return React.createElement("a", {className: "btn btn-info option-add", onClick: this.addOption}, "Add #", this.state.currentOption)
        }.bind(this)()
      )
    )
  }
}

module.exports = Autocomplete