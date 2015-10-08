

var Password = React.createClass({
  getInitialState: function(){
    return {strength: {}, password: '', visible: false, ok: false}
  },
  checkStrength: function(e){
    var _this = this
    var password = e.target.value
    this.setState({ password: password });
    var strength = {}
    Object.keys(this.props).forEach(function(key, index, list){
      if (_this.props[key] && _this.criteria[key].pattern.test(password)) {
        strength[key] = true
      }
    })
    this.setState({strength: strength}, function() {
      console.log(_this.state.strength)
      if (Object.keys(_this.state.strength).length == Object.keys( _this.props).length) {
        _this.setState({ok: true})
      }
    })
  },
  toggleVisibility: function(){
    this.setState({visible: !this.state.visible}, function(){
    })
  },
  criteria: {
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
      pattern: /([\#\$\@\!\$\%]+)/
    },
    number: {
      message: 'Must have at least one number',
      pattern: /([0-9]+)/
    },
    'over6': {
      message: 'Must be more than 6 characters',
      pattern: /(.{6,})/
    }
  },
  generate: function(){
    var _this = this
    // (function(){g=function(){c='!@#$%0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';p='';for(i=0;i<8;i++){p+=c.charAt(Math.floor(Math.random()*62));}return p;};p=g();while(!/[A-Z]/.test(p)||!/[0-9]/.test(p)||!/[a-z]/.test(p)){p=g();}return p;})()

     this.setState({visible: true, password: Math.random().toString(36).slice(-8)}, function(){
       _this.checkStrength({target: {value: _this.state.password}})
     })
  },
  render: function(){
    var _this = this
    var criteria = Object.keys(this.props).map(function(key){
      if (_this.props[key]) {
        var obj = {}
        obj.key = key
        obj.value = _this.criteria[key]
        obj.isCompleted = true
        return obj
      }
    })
    return (
      <div className="well form-group col-md-6">
        <label forHtml="password">Password</label>
        <PasswordInput name="password" onChange={this.checkStrength} value={this.state.password}  visible={this.state.visible}/>
        <PasswordVisibility checked={this.state.visible} onChange={this.toggleVisibility}/>
        <PasswordInfo criteria={criteria} strength={this.state.strength}/>
        <PasswordGenerate onClick={this.generate}>Generate</PasswordGenerate>
        <button className={'btn btn-primary' + ((this.state.ok)? '': ' disabled')}>Save</button>
      </div>
    )
}})
var PasswordGenerate = React.createClass({
  render: function(){
    return (
      <button {...this.props} className="btn">{this.props.children}</button>
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
          {this.props.criteria.map(function(value, item, list){
            if (_this.props.strength[value.key])
              return <strike>{value.value}</strike></li>
            else
              return <li>{value.value}</li>
          })}
        </ul>
      </div>
    )
  }
})

React.render(<Password
    upperCase={true}
    lowerCase={true}
    special={true}
    number={true}
    over6={true}/>,
  document.getElementById('password'))
