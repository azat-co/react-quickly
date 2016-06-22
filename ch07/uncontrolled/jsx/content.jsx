var Content = React.createClass({
  getInitialState(){
    return {textbook: ''}
  },
  handleChange(event) {
    console.log(event.target.value)
    this.setState({textbook: event.target.value})
  },
  render: function() {
    return <div>
      <input
        type="text"
        onChange={this.handleChange}
        placeholder="Eloquent TypeScript: Myth or Reality" />
      <br/>
      <span>{this.state.textbook}</span>
    </div>
  }
})

ReactDOM.render(
  <Content/>,
  document.getElementById('content')
);
