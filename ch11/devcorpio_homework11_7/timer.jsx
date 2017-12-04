const Timer = (props) => {
  if (props.timeLeft == 0) {
    document.getElementById('end-of-time').play()
  }
  if (props.timeLeft == null || props.timeLeft == 0)
    return <div/>
  return <h1>Time left: {props.timeLeft}</h1>
};

class Button extends React.Component {
  startTimer(event) {
    return this.props.startTimer(this.props.time)
  }
  render() {
    return <button
      type="button"
      className='btn-default btn'
      onClick={()=>{this.props.startTimer(this.props.time)}}>
      {this.props.time} seconds
    </button>
  }
}

class TimerWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {timeLeft: null, timer: null}
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resumeTimer = this.resumeTimer.bind(this)
  }
  startTimer(timeLeft) {
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      console.log('2: Inside of setInterval')
      var timeLeft = this.state.timeLeft - 1
      if (timeLeft == 0) clearInterval(timer)
      this.setState({timeLeft: timeLeft})
    }, 1000)
    console.log('1: After setInterval')
    return this.setState({timeLeft: timeLeft, timer: timer})
  }
  stopTimer() {
    clearInterval(this.state.timer)
    this.setState({
      timer: null,
    })
  }
  resumeTimer() {
    if (this.state.timeLeft > 0) {
      this.startTimer(this.state.timeLeft)
    }
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
        <Timer timeLeft={this.state.timeLeft}/>
        {this.state.timeLeft > 0 &&
        <div className="btn-group" role="group">
          {this.state.timer === null
            ?
            <button className="btn-success btn" onClick={this.resumeTimer}>Resume</button>
            :
            <button className="btn-warning btn" onClick={this.stopTimer}>Pause</button>
          }
        </div>
        }
      <audio id="end-of-time" src="flute_c_long_01.wav" preload="auto"></audio>
      </div>
    )
  }
}

ReactDOM.render(
  <TimerWrapper/>,
  document.getElementById('timer-app')
)
