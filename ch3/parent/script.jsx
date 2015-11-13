var ClickCounterButton = React.createClass({
  render: function() {
    return <button onClick={this.props.handler}>
      Don't click me!
    </button>
  }
})

var Counter = React.createClass({
  render: function(){
    return <span>Clicked {this.props.value} times.</span>
  }
})

var Content = React.createClass({
  getInitialState: function(){
    return {counter: 0}
  },
  click: function(e){
    this.setState({counter: ++this.state.counter})
  },
  render: function() {
    return (
      <div>
        <ClickCounterButton handler={this.click}/>
        <br/>
        <Counter value={this.state.counter}/>
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
