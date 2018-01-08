class SaveButton extends React.Component {
  handleSave(event) {
    console.log(this, event);
  }
  render() {
    return React.createElement(
      "button",
      { onClick: this.handleSave.bind(this) },
      "Save"
    );
  }
}