class Counter extends React.Component {
  render() {
    return React.createElement(
      "span",
      null,
      "Clicked ",
      this.props.value,
      " times."
    );
  }
}