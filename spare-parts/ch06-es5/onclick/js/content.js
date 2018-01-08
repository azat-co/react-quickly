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
      React.createElement(
        "button",
        { onClick: this.handleClick, className: "btn btn-primary" },
        "Don't click me ",
        this.state.counter,
        " times!"
      )
    );
  }
});