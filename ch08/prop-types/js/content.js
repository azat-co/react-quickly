class Content extends React.Component {
  render() {
    let number = 1;
    return React.createElement(
      "div",
      null,
      React.createElement(Button, { buttonLabel: "Start" }),
      React.createElement(Button, null),
      React.createElement(Button, { title: number }),
      React.createElement(Button, null),
      React.createElement(Button, { email: "not-a-valid-email" }),
      React.createElement(Button, { email: "hi@azat.co" })
    );
  }
}