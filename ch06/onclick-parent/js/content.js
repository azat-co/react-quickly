class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }
  handleClick(event) {
    this.setState({ counter: ++this.state.counter });
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(ClickCounterButton, { handler: this.handleClick }),
      React.createElement("br", null),
      React.createElement(Counter, { value: this.state.counter })
    );
  }
}