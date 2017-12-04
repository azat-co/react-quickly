class TimerSound extends React.Component {
  constructor(props) {
    super(props)
    this.handleTimerEnded = this.handleTimerEnded.bind(this)
  }
  handleTimerEnded() {
    this.refs.endOfTime.play()
  }
  componentDidMount() {
    window.addEventListener('timerEnded', this.handleTimerEnded)
  }
  render() {
    return <audio ref="endOfTime" src="flute_c_long_01.wav" preload="auto"></audio>
  }
}
