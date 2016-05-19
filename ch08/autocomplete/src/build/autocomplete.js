var React = require('react'),
  ReactDOM = require('react-dom'),
  request = require('request'),
  Reflux = require('reflux')

var fD = ReactDOM.findDOMNode

var Actions = Reflux.createActions([
  'loadOptions',
  'addOption',
  'setUrl',
  'setOptions'
])

var optionsStore = Reflux.createStore({
    listenables: [Actions],
    onSetUrl: function(url){
      this.url = url
    },
    onSetOptions: function(options){
      this.options = options
    },
    onLoadOptions: function(options) {
      this.options = options
      request({url: this.url},function(error, response, body) {
        if(error || !body){
          return console.error('Failed to load')
        }
        body = JSON.parse(body)
        this.options = body
        this.trigger(body)
      }.bind(this))
    },
    onAddOption: function(option, callback){
      request({url: this.url, method: 'POST', json: {name: option}}, function(error, response, body) {
        if(error || !body){
          return console.error('Failed to save')
        }
        this.options.unshift(body)
        callback(body)
        this.trigger(this.options)
      }.bind(this))
    }
})

module.exports = React.createClass({displayName: "exports",
  mixins: [Reflux.connect(optionsStore,'options')],
  getInitialState: function(){
    Actions.setUrl(this.props.url)
    Actions.setOptions(this.props.options)
    return {options: this.props.options,
      filteredOptions: this.props.options,
      currentOption: ''
    }
  },
  componentWillMount: function(){
    Actions.loadOptions(this.props.options)
  },
  filter: function(e){
    this.setState({
      currentOption: e.target.value,
      filteredOptions: (this.state.options.filter(function(option, index, list){
        return (e.target.value === option.name.substr(0, e.target.value.length))
      }))
    }, function(){
    })
  },
  addOption: function(e){
    var currentOption = this.state.currentOption

    Actions.addOption(this.state.currentOption, function(){
      this.filter({target: {value: currentOption}})
    }.bind(this))
  },
  render: function(){

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
})
