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
      console.log('updating...');
      this.setState({ currentTime: new Date().toLocaleString() });
    }.bind(this), 1000);
  },
  render: function () {
    console.log('rendering...');
    return React.createElement(TimeDisplay, { time: this.state.currentTime });
  }
});