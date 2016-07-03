class Content extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Button, { buttonLabel: "Start" }),
      React.createElement(Button, null),
      React.createElement(Button, null),
      React.createElement(Button, null)
    );
  }
}