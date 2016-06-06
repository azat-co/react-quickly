var rules =  {
  upperCase: {
    message:  'Must have at least one upper-case character',
    pattern: /([A-Z]+)/
  },
  lowerCase: {
    message: 'Must have at least one lower-case character',
    pattern: /([a-z]+)/
  },
  special:{
    message: 'Must have at least one special character (#$@!&%...)',
    pattern: /([\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~]+)/
  },
  number: {
    message: 'Must have at least one number',
    pattern: /([0-9]+)/
  },
  'over6': {
    message: 'Must be more than 6 characters',
    pattern: /(.{6,})/
  }
}
var Password = React.createClass({
  getInitialState: function(){
    return {strength: {}, password: '', visible: false, ok: false}
  },
  checkStrength: function(e){
    var _this = this
    var password = e.target.value
    this.setState({ password: password })
    var strength = {}
    Object.keys(this.props).forEach(function(key, index, list){
      if (_this.props[key] && rules[key].pattern.test(password)) {
        strength[key] = true
      }
    })
    this.setState({strength: strength}, function() {
      if (Object.keys(_this.state.strength).length == Object.keys( _this.props).length) {
        _this.setState({ok: true})
      } else {
        _this.setState({ok: false})
      }
    })
  },
  toggleVisibility: function(){
    this.setState({visible: !this.state.visible}, function(){
    })
  },

  generate: function(){
    var _this = this
     this.setState({visible: true, password: generatePassword()}, function(){
       _this.checkStrength({target: {value: _this.state.password}})
     })
  },
  render: function(){
    var processedRules = Object.keys(this.props).map(function(key){
      if (this.props[key]) {
        return {
          key: key,
          rule: rules[key],
          isCompleted: this.state.strength[key] || false
        }
      }
    }.bind(this))
    return (
      <div className="well form-group col-md-6">
        <label forHtml="password">Password</label>
        <PasswordInput name="password" onChange={this.checkStrength} value={this.state.password}  visible={this.state.visible}/>
        <PasswordVisibility checked={this.state.visible} onChange={this.toggleVisibility}/>
        <PasswordInfo rules={processedRules}/>
        <PasswordGenerate onClick={this.generate}>Generate</PasswordGenerate>
        <button className={'btn btn-primary' + ((this.state.ok)? '': ' disabled')}>Save</button>
      </div>
    )
}})
var PasswordGenerate = React.createClass({
  render: function(){
    return (
      <button {...this.props} className="btn generate-btn">{this.props.children}</button>
    )
  }
})
var PasswordInput = React.createClass({
    render: function(){
      return(
        <input className="form-control" type={this.props.visible ? 'text' : 'password'} name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
      )
    }
})
var PasswordVisibility = React.createClass({
    render: function(){
      return(
        <label className="form-control">
          <input className="" type="checkbox" checked={this.props.checked} onChange={this.props.onChange}/> Show password
        </label>
      )
    }
})

var PasswordInfo = React.createClass({
  render: function () {
    var _this = this
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
})

window.Password = Password
