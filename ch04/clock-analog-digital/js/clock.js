class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date()
    };
  }
  launchClock() {
    setInterval(() => {
      console.log('Updating...');
      this.setState({ currentTime: new Date() });
    }, 1000);
  }
  render() {
    console.log('Rendering...');
    return React.createElement(
      'div',
      null,
      React.createElement(AnalogDisplay, { time: this.state.currentTime }),
      React.createElement(DigitalDisplay, { time: this.state.currentTime })
    );
  }
}