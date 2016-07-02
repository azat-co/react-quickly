class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = { currentTime: new Date().toLocaleString() };
  }
  launchClock() {
    console.log(this);
    setInterval(function () {
      console.log('updating...');
      this.setState({ currentTime: new Date().toLocaleString() });
    }.bind(this), 1000);
  }
  render() {
    console.log(this);
    console.log('Rendering...');
    return React.createElement(
      'div',
      null,
      this.state.currentTime
    );
  }
}