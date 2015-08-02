'use strict';

var Timer = React.createClass({
  displayName: 'Timer',

  render: function render() {
    if (this.props.time == null) return React.createElement('div', null);
    return React.createElement(
      'h1',
      null,
      this.props.time
    );
  }
});
var TimerWrapper = React.createClass({
  displayName: 'TimerWrapper',

  getInitialState: function getInitialState() {
    return { time: null, int: null };
  },
  startTimer: function startTimer(time) {
    clearInterval(this.state.int);
    var _this = this;
    var int = setInterval(function () {
      console.log('2');
      var tl = _this.state.time - 1;
      if (tl == 0) clearInterval(int);
      _this.setState({ time: tl });
    }, 1000);
    console.log('1');
    return this.setState({ time: time, int: int });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h2',
        null,
        'Timer'
      ),
      React.createElement(Button, { time: '5', startTimer: this.startTimer }),
      React.createElement(Button, { time: '10', startTimer: this.startTimer }),
      React.createElement(Button, { time: '15', startTimer: this.startTimer }),
      React.createElement(Timer, { time: this.state.time })
    );
  }
});

var Button = React.createClass({
  displayName: 'Button',

  startTimer: function startTimer(e) {
    return this.props.startTimer(this.props.time);
  },
  render: function render() {
    return React.createElement(
      'button',
      { onClick: this.startTimer },
      this.props.time,
      ' seconds'
    );
  }
});

React.render(React.createElement(TimerWrapper, null), document.body);
