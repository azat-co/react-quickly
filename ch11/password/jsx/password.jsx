const React = require('react')
const ReactDOM = require('react-dom')
const generatePassword = require('../js/generate-password.js')

const rules = require('../js/rules.js')

class Password extends React.Component {
  constructor(props) {
    super(props)
    this.state = {strength: {}, password: '', visible: false, ok: false}
    this.generate = this.generate.bind(this)
    this.checkStrength = this.checkStrength.bind(this)
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }
  checkStrength(event) {
    var password = event.target.value
    this.setState({ password: password })
    var strength = {}
    Object.keys(this.props).forEach((key, index, list)=>{
      if (this.props[key] && rules[key].pattern.test(password)) {
        strength[key] = true
      }
    })
    this.setState({strength: strength}, ()=>{
      if (Object.keys(this.state.strength).length == Object.keys( this.props).length) {
        this.setState({ok: true})
      } else {
        this.setState({ok: false})
      }
    })
  }
  toggleVisibility() {
    this.setState({visible: !this.state.visible}, ()=>{
    })
  }

  generate() {
     this.setState({visible: true, password: generatePassword()}, ()=>{
       this.checkStrength({target: {value: this.state.password}})
     })
  }
  render() {
    var processedRules = Object.keys(this.props).map((key)=>{
      if (this.props[key]) {
        return {
          key: key,
          rule: rules[key],
          isCompleted: this.state.strength[key] || false
        }
      }
    })
    return (
      <div className="well form-group col-md-6">
        <label>Password</label>
        <PasswordInput
          name="password"
          onChange={this.checkStrength}
          value={this.state.password}
          visible={this.state.visible}/>
        <PasswordVisibility
          checked={this.state.visible}
          onChange={this.toggleVisibility}/>
        <PasswordInfo rules={processedRules}/>
        <PasswordGenerate onClick={this.generate}>
          Generate
        </PasswordGenerate>
        <button className={'btn btn-primary' + ((this.state.ok)? '': ' disabled')}>
          Save
        </button>
      </div>
    )
}}

class PasswordGenerate extends React.Component{
  render() {
    return (
      <button {...this.props} className="btn generate-btn">{this.props.children}</button>
    )
  }
}
class PasswordInput extends React.Component {
  render() {
    return(
      <input className="form-control"
        type={this.props.visible ? 'text' : 'password'}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}/>
    )
  }
}
class PasswordVisibility extends React.Component {
  render() {
    return (
      <label className="form-control">
        <input className=""
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.onChange}/> Show password
      </label>
    )
  }
}

class PasswordInfo extends React.Component {
  render() {
    return (
      <div>
        <h4>Password Strength</h4>
        <ul>
          {this.props.rules.map(function(processedRule, index, list){
            if (processedRule.isCompleted)
              return <li key={processedRule.key}><strike>{processedRule.rule.message}</strike></li>
            else
              return <li key={processedRule.key}>{processedRule.rule.message}</li>
          })}
        </ul>
      </div>
    )
  }
}

module.exports = Password