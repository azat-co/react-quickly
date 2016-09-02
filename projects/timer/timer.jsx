class Timer extends React.Component {
  render() {
  if (this.props.timeLeft == 0) {
    document.getElementById('end-of-time').play()
  }
  if (this.props.timeLeft == null || this.props.timeLeft == 0) return <div/>
    return <h1>Time left: {this.props.timeLeft}</h1>
  }
}

class TimerWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {time: null, timer: null}
  }
  startTimer(time) {
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      console.log('2: Inside of setInterval')
      var timeLeft = this.state.time - 1
      if (timeLeft == 0) clearInterval(timer)
      this.setState({timeLeft: timeLeft})
    }, 1000)
    console.log('1: After setInterval')
    return this.setState({timeLeft: timeLeft, timer: timer})
  }
  render() {
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group" >
          <Button time="5" startTimer={this.startTimer}/>
          <Button time="10" startTimer={this.startTimer}/>
          <Button time="15" startTimer={this.startTimer}/>
        </div>
        <Timer time={this.state.timeLeft}/>
      <audio id="end-of-time" src="flute_c_long_01.wav" preload="auto"></audio>
      </div>
    );
  }
}

class Button extends React.Component {
  startTimer(event) {
    return this.props.startTimer(this.props.timeLeft)
  },
  render() {
    return <button type="button" className='btn-default btn' onClick={this.startTimer}>
      {this.props.timeLeft} seconds
    </button>
  }
}

ReactDOM.render(
  <TimerWrapper/>,
  document.getElementById('timer-app')
)