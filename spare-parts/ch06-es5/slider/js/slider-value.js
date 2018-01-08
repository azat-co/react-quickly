var SliderValue = React.createClass({
  displayName: 'SliderValue',

  getInitialState() {
    return { sliderValue: 0 };
  },
  handleSlide(event) {
    this.setState({ sliderValue: event.detail.ui.value });
  },
  componentDidMount() {
    window.addEventListener('slide', this.handleSlide);
  },
  componentWillUnmount() {
    window.removeEventListener('slide', this.handleSlide);
  },
  render: function () {
    return React.createElement(
      'div',
      { className: '' },
      'Value: ',
      this.state.sliderValue
    );
  }
});