var Menu = React.createClass({
  render: function(){
    var menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us']
    return (
      <div>
      {menus.map(function(v,i){
        return <Link label={v}/>
      })}
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
