var Content = React.createClass({
  getInitialState: function(){
    var _this = this
    setInterval(function(){
      _this.setState({a: Math.random()})
    }, 300)
    return {a: 0}
  },
  render: function() {
    return (
      <div>
        <h1>Changing the State</h1>
        <p>This value is random: {this.state.a}</p>
      </div>
    );
  }
})

React.render(
  <Content />,
  document.getElementById('content')
);

