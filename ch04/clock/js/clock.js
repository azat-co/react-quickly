class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = { currentTime: new Date() };
  }
  launchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime: new Date()
      });
    }, 1000);
  }
  render() {
    console.log('Rendering Clock...');
    return React.createElement(
      'div',
      null,
      this.state.currentTime
    );
  }
}