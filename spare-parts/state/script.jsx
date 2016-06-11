var Content = React.createClass({
  getInitialState: function(){
    var _this = this
    setInterval(function(){
      _this.setState({hash: Math.random()})
    }, 300)
    return {hash: 0}
  },
  render: function() {
    return (
      <div>
        <h1>Changing the State</h1>
        <p>This value is random: {this.state.hash}</p>
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
