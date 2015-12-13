var RunMixin = {
  getInitialState: function(){
    return {label: 'Run'}
  },
  componentWillMount: function() {
    console.log('component will mount')
  },
  click: function(e) {
    var iframe = document.getElementById('frame').src = 'http://reactjs.com'
  },
  componentDidMount: function(){
    console.log(ReactDOM.findDOMNode(this))
  }
}
var Button = React.createClass({
  mixins: [RunMixin],
  render: function() {
    return <button onClick={this.click}>{this.state.label}</button>
  }
})
var Link = React.createClass({
  mixins: [RunMixin],
  render: function(){
    return <a onClick={this.click} href="#">{this.state.label}</a>
  }
})
var Logo = React.createClass({
  mixins: [RunMixin],
  render: function(){
    return <img onClick={this.click} width="40" src="logo.png" href="#"/>
  }
})
var Content = React.createClass({
  render: function() {
    return (
      <div>
        <Button />
        <br />
        <br />
        <Link />
        <br />
        <br />
        <Logo />
        <br />
        <br />
        <iframe id="frame" src=""/>
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
