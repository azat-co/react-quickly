render: function() {
  if (this.props.user.session)
    var link = React.createElement('a', {href: '/logout'}, 'Logout')
  else
    var link = React.createElement('a', {href: '/login'}, 'Login')
  return createElement('div', null, link)
}

render: function() {
  var link = function(sessionFlag) {
    if (sessionFlag)
      return React.createElement('a', {href: '/logout'}, 'Logout')
    else
      return React.createElement('a', {href: '/login'}, 'Login')
  }
  return createElement('div', null, link(this.props.user.session))
}



render: function() {
  return createElement('div', null,
    (this.props.user.session) ? React.createElement('a', {href: '/logout'}, 'Logout') : React.createElement('a', {href: '/login'}, 'Login')
  )
}


render: function() {
  if (this.props.user.session)
    var link = <a href='/logout'>Logout</a>
  else
    var link = <a href='/login'>Login</a>
  return <div>{link}</div>
}
---
render: function() {
  var link = function(sessionFlag) {
    if (sessionFlag)
      return <a href='/logout'>Logout</a>
    else
      return <a href='/login'>Login</a>
  }
  return <div>{link(this.props.user.session)}</div>
}
---
render: function() {
  return <div>
    {(this.props.user.session) ? <a href='/logout'>Logout</a> : <a href='/login'>Login</a>}
  </div>
}

---
render: function() {
  return <div>{
    function(sessionFlag) {
      if (sessionFlag)
        return <a href='/logout'>Logout</a>
      else
        return <a href='/login'>Login</a>
    }(this.props.user.session)
  }</div>
}

---
render: function() {
  var sessionFlag = this.props.user.session
  return <div>
    <a href={(sessionFlag)?'/logout':'/login'}>
      {(sessionFlag)?'Logout':'Login'}
    </a>
  </div>
}

---
var specialChars = '&copy;&mdash;&ldquo;'

<span>{specialChars}</span>
<input value={specialChars}/>
