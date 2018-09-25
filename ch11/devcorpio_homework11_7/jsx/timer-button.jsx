class Button extends React.Component {
  startTimer(event) {
    return this.props.startTimer(this.props.time)
  }

  render() {
    return <button
      type="button"
      className='btn-default btn'
      onClick={()=>{this.props.startTimer(this.props.time, this.props.time)}}>
      {this.props.time / 60} minutes
    </button>
  }
}
