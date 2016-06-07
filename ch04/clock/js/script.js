var Clock = React.createClass({
  displayName: 'Clock',

  getInitialState: function () {
    this.launchClock();
    return {
      currentTime: new Date().toLocaleString()
    };
  },
  launchClock: function () {
    var _this = this;
    setInterval(function () {
      _this.setState({ currentTime: new Date().toLocaleString() });
    }, 1000);
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      this.state.currentTime
    );
  }
});

ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));