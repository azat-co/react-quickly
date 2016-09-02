const React = require('react'),
  ReactDOM = require('react-dom'),
  request = require('axios')

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
    request
      .post(this.props.url,{name: option})
      .then(response => response.data)
      .then((body) => {
        if(error || !body){
          return console.error('Failed to save')
        }
        this.options.unshift(body)
        this.filter({target: {value: currentOption}})
    })
  }
  render() {
    return (
      <div className="form-group">
        <input type="text" className="form-control option-name" onChange={this.filter} value={this.currentOption} placeholder="React.js"></input>
        {this.state.filteredOptions.map(function(option, index, list){
          return <div key={option._id}><a className="btn btn-default option-list-item" href={'/#/'+option.name} target="_blank">#{option.name}</a></div>
        })}
        {function(){if (this.state.filteredOptions.length == 0 && this.state.currentOption!='')
          return <a className="btn btn-info option-add" onClick={this.addOption}>Add #{this.state.currentOption}</a>
        }.bind(this)()}
      </div>
    )
  }
}

module.exports = Autocomplete