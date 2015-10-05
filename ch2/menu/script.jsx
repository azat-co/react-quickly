window.isLoggedIn =true
var Menu = React.createClass({
  render: function(){
    var menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us'],
      loginLogoutLink
    if (window.isLoggedIn) {
      loginLogoutLink = <a href="/logout">Log out</a>
    } else {
      loginLogoutLink = <a href="/login">Log in</a>
    }
    return (
      <div>
        {menus.map(function(v,i){
          return <Link label={v}/>
        })}
        <div>Status: {window.isLoggedIn ? 'Logged in' : 'Logged out'}</div>
        <div>{loginLogoutLink}</div>
        <div>{function(){
          if (window.isLoggedIn) return <a href='/logout'>Log out</a>
          else return <a href='/login'>Log in</a>
          }()}
        </div>
      </div>
    )
}})

var Link = React.createClass({
  render: function () {
    var url='/'
      + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')
    return <a href={url}>
      {this.props.label}
      <br/>
    </a>
  }
})

React.render(<Menu />, document.getElementById('menu'))
