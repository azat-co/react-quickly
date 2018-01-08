class SaveButton extends React.Component {
  handleSave(event) {
    console.log(this, event)
  }
  render() {
    return <button onClick={(event)=>{console.log(this, event)}.bind(this)}>Save</button>
  }
}