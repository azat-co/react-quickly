var Content = React.createClass({
  getInitialState: function(){
    return {value: ''}
  },
  change: function(e) {
    this.setState({value: e.target.value.replace(/[a-z]/ig, '')})
  },
  render: function() {
    return <div>
      Account Number: <input type="text" onChange={this.change} placeholder="123456" value={this.state.value}/>
      <br/>
      <span>{this.state.value.length>0?'You entered: ' + this.state.value: ''}</span>
    </div>
  }
})

React.render(
  <Content></Content>,
  document.getElementById('content')
);