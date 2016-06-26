var ClickCounterButton = React.createClass({
  displayName: "ClickCounterButton",

  render() {
    return React.createElement(
      "button",
      { onClick: this.props.handler, className: "btn btn-danger" },
      "Increase Volume (Current volume is ",
      this.props.counter,
      ")"
    );
  }
});

var Content = React.createClass({
  displayName: "Content",

  getInitialState() {
    return { counter: 0 };
  },
  handleClick(event) {
    this.setState({ counter: ++this.state.counter });
  },
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(ClickCounterButton, { counter: this.state.counter, handler: this.handleClick })
    );
  }
});