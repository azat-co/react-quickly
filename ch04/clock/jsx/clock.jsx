const Clock = React.createClass({
  getInitialState() {
    this.launchClock()
    return {
      currentTime: (new Date()).toLocaleString()
    }
  },
  launchClock() {
    setInterval(function(){
      console.log('Updating time...')
      // use _this or this because of bind
      this.setState({currentTime: (new Date()).toLocaleString()})
    }.bind(this), 1000)
  },
  render() {
    console.log('Rendering Clock...')
    return <div>{this.state.currentTime}</div>
  }
})