var ClickCounterButton = React.createClass({
  render() {
    return <button
      onClick={this.props.handler}
      className="btn btn-info">
      Don't touch me with your dirty hands!
    </button>
  }
})

var Counter = React.createClass({
  render() {
    return <span>Clicked {this.props.value} times.</span>
  }
})

var Content = React.createClass({
  getInitialState() {
    return {counter: 0}
  },
  handleClick(event) {
    this.setState({counter: ++this.state.counter})
  },
  render() {
    return (
      <div>
        <ClickCounterButton handler={this.handleClick}/>
        <br/>
        <Counter value={this.state.counter}/>
      </div>
    )
  }
})
