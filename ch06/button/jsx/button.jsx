class SaveButton extends React.Component {
  handleSave(event) {
    console.log(this, event)
  }
  render() {
    return <div>
      <button onClick={((event)=>{console.log(this, event)}).bind(this)}>Save</button>
      <button onClick={this.handleSave.bind(this)}>Save</button>
    </div>
  }
}