var Clock = React.createClass({
  getInitialState: function(){
    this.launchClock()
    return {
      currentTime: (new Date()).toLocaleString()
    }
  },
  launchClock: function() {
    setInterval(function(){
      console.log('Updating...')
      this.setState({currentTime: (new Date()).toLocaleString()})
    }.bind(this), 1000)
  },
  render: function(){
    console.log('Rendering...')
    return <div>
      <AnalogDisplay time={this.state.currentTime}/>
      <DigitalDisplay time={this.state.currentTime}/>
    </div>
  }
})