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
      // use _this or this because of bind
      this.setState({ currentTime: new Date().toLocaleString() });
    }.bind(this), 1000);
  },
  render: function () {
    console.log('rendering...');
    return React.createElement(
      'div',
      null,
      this.state.currentTime
    );
  }
});