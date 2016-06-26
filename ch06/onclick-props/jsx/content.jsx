var ClickCounterButton = React.createClass({
  render() {
    return <button onClick={this.props.handler} className="btn btn-danger">
      Increase Volume (Current volume is {this.props.counter})
    </button>
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
        <ClickCounterButton counter={this.state.counter} handler={this.handleClick}/>
      </div>
    )
  }
})
