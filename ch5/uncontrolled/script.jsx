var Content = React.createClass({
  getInitialState: function(){
    return {value: ''}
  },
  change: function(e) {
    console.log(e.target.value)
    console.log(ReactDOM.findDOMNode(this.refs.textbox).value)
    this.setState({value: e.target.value})
  },
  render: function() {
    return <div>
      <input type="text" onChange={this.change} placeholder="Hello!" ref="textbox" />
      <span>{this.state.value}</span>
    </div>
  }
})

ReactDOM.render(
  <Content></Content>,
  document.getElementById('content')
);
