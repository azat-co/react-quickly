var Clock = React.createClass({
  getInitialState: function(){
    this.launchClock()
    return {
      currentTime: (new Date()).toLocaleString()
    }
  },
  launchClock: function() {
    var _this = this
    setInterval(function(){
      _this.setState({currentTime: (new Date()).toLocaleString()})
    }, 1000)
  },
  render: function(){
    return <div>{this.state.currentTime}</div>
  }
})

ReactDOM.render(
  <Clock />,
  document.getElementById('content')
)
