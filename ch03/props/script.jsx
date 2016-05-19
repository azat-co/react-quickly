var ClickCounterButton = React.createClass({
  render: function() {
    return <button onClick={this.props.handler}>
      Don't click me {this.props.counter} times!
    </button>
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
        <ClickCounterButton counter={this.state.counter} handler={this.click}/>
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
