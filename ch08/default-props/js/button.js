class Button extends React.Component {
  render() {
    return React.createElement(
      "button",
      { className: "btn" },
      this.props.buttonLabel
    );
  }
}
Button.defaultProps = { buttonLabel: 'Submit' };