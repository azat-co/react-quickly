class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  handleClick(event) {
    this.setState({ counter: ++this.state.counter });
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        {
          onClick: this.handleClick.bind(this),
          className: "btn btn-primary" },
        "Don't click me ",
        this.state.counter,
        " times!"
      )
    );
  }
}