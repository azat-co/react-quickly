var Clock = React.createClass({
  displayName: 'Clock',

  getInitialState: function () {
    this.launchClock();
    return {
      currentTime: new Date().toLocaleString()
    };
  },
  launchClock: function () {
    setInterval(function () {
      console.log('Updating time...');
      // use _this or this because of bind
      this.setState({ currentTime: new Date().toLocaleString() });
    }.bind(this), 1000);
  },
  render: function () {
    console.log('Rendering Clock...');
    return React.createElement(
      'div',
      null,
      this.state.currentTime
    );
  }
});