var Content = React.createClass({
  displayName: "Content",

  getInitialState() {
    return { textbook: '' };
  },
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ textbook: event.target.value });
  },
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement("input", {
        type: "text",
        onChange: this.handleChange,
        placeholder: "Eloquent TypeScript: Myth or Reality" }),
      React.createElement("br", null),
      React.createElement(
        "span",
        null,
        this.state.textbook
      )
    );
  }
});

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));