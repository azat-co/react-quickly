var ClickCounterButton = React.createClass({
  displayName: "ClickCounterButton",

  render() {
    return React.createElement(
      "button",
      { onClick: this.props.handler, className: "btn btn-info" },
      "Don't touch me with your dirty hands!"
    );
  }
});

var Counter = React.createClass({
  displayName: "Counter",

  render() {
    return React.createElement(
      "span",
      null,
      "Clicked ",
      this.props.value,
      " times."
    );
  }
});

var Content = React.createClass({
  displayName: "Content",

  getInitialState() {
    return { counter: 0 };
  },
  handleClick(e) {
    this.setState({ counter: ++this.state.counter });
  },
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(ClickCounterButton, { handler: this.handleClick }),
      React.createElement("br", null),
      React.createElement(Counter, { value: this.state.counter })
    );
  }
});