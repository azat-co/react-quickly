class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.launchClock()
    this.state = {
      currentTime: new Date()
    }
  }
  launchClock() {
    setInterval(()=> {
      console.log('Updating...')
      this.setState({currentTime: new Date()})
    }, 1000)
  }
  render() {
    console.log('Rendering...')
    return <div>
      <AnalogDisplay time={this.state.currentTime}/>
      <DigitalDisplay time={this.state.currentTime.toLocaleString()}/>
    </div>
  }
}
