class SaveButton extends React.Component {
  handleSave(event) {
    console.log(this, event);
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { onClick: event => {
            console.log(this, event);
          } },
        "Save"
      ),
      React.createElement(
        "button",
        { onClick: this.handleSave.bind(this) },
        "Save"
      )
    );
  }
}