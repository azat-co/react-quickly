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
        <button onClick={this.handleClick} className="btn btn-primary">
          Don't click me {this.state.counter} times!
        </button>
      </div>
    )
  }
})

