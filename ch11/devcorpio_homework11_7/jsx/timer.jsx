class TimerWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {timeLeft: null, timer: null, selectedTime: null}
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resumeTimer = this.resumeTimer.bind(this)
    this.cancelTimer = this.cancelTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer(timeLeft, originalTime) {
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      console.log('2: Inside of setInterval')
      var timeLeft = this.state.timeLeft - 1
      if (timeLeft == 0) {
        clearInterval(timer)
        dispatchEvent(new CustomEvent('timerFinished', {}));
      }
      this.setState({timeLeft: timeLeft})
      dispatchEvent(new CustomEvent('timeIncremented', {}))
    }, 1000)
    let selectedTime = originalTime ? originalTime : this.state.selectedTime

    dispatchEvent(new CustomEvent('timerStarted', {
      detail: {
        timeLeft: timeLeft,
        selectedTime: selectedTime,
      }
    }))

    return this.setState({timeLeft: timeLeft, timer: timer, selectedTime: selectedTime})
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
  cancelTimer() {
    clearInterval(this.state.timer)
    this.setState({
      timeLeft: null,
      timer: null,
    })

    dispatchEvent(new CustomEvent('timerFinished', {}));
  }
  resetTimer() {
    this.startTimer(this.state.selectedTime)
  }

  render() {
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group" >
          <Button time="20" startTimer={this.startTimer}/>
          <Button time="600" startTimer={this.startTimer}/>
          <Button time="900" startTimer={this.startTimer}/>
        </div>
        <Timer timeLeft={this.state.timeLeft}/>
        {this.state.timeLeft > 0 &&
        <div>
          <div className="btn-group" role="group">
            {this.state.timer === null
              ?
              <button className="btn-success btn" onClick={this.resumeTimer}>Resume</button>
              :
              <button className="btn-warning btn" onClick={this.stopTimer}>Pause</button>
            }
            <button className="btn-danger btn" onClick={this.cancelTimer}>Cancel</button>
            <button className="btn-primary btn" onClick={this.resetTimer}>Reset</button>
          </div>
        </div>
        }
      <TimerSound />
      </div>
    )
  }
}

ReactDOM.render(
  <TimerWrapper/>,
  document.getElementById('timer-app')
)
