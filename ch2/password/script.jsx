

var Password = React.createClass({
  getInitialState: function(){
    return {strength: {}, password: ''}
  },
  checkStrength: function(e){
    var password = e.target.value
    this.setState({ password: password });
    var strength = {}
    if (this.props.upperCase && /([A-Z]+)/.test(password)) {
      strength.upperCase = true
    }
    this.setState({strength: strength})
  },
  criteria: {
    upperCase: 'Must have at least one upper-case character',
    lowerCase: 'Must have at least one lower-case character',
    special: 'Must have at least one special character (#$@!&%...)',
    number: 'Must have at least one number',
    'over6': 'Must be more than 6 characters'
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
        <PasswordInput name="password" onchange={this.checkStrength} value={this.state.password}/>
        <PasswordVisibility/>
        <PasswordInfo criteria={criteria} strength={this.state.strength}/>
      </div>
    )
}})

var PasswordInput = React.createClass({
    render: function(){
      return(
        <input className="form-control" type="password" name={this.props.name} value={this.props.value} onChange={this.props.onchange}/>
      )
    }
})
var PasswordVisibility = React.createClass({
    render: function(){
      return(
        <label className="form-control">
          <input className="" type="checkbox"/> Show password
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
            // debugger
            if (_this.props.strength[value.key])
              return <li> <span className="glyphicon-ok glyphicon"><strike>{value.value}</strike></span></li>
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
