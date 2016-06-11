var SliderButtons = React.createClass({
  displayName: "SliderButtons",

  getInitialState() {
    return { sliderValue: 0 };
  },
  handleSlide(event, ui) {
    this.setState({ sliderValue: ui.value });
  },
  handleChange(value) {
    return () => {
      $("#slider").slider('value', this.state.sliderValue + value);
      this.setState({ sliderValue: this.state.sliderValue + value });
    };
  },
  componentDidMount() {
    $("#slider").on('slide', this.handleSlide);
    // window.addEventListener('slide', this.handleSlide)
  },

  componentWillUnmount() {
    $("#slider").off('slide', this.handleSlide);
    // window.removeEventListener('slide', this.handleSlide)
  },

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { disabled: this.state.sliderValue <= 0 ? true : false,
          className: "btn default-btn",
          onClick: this.handleChange(-1) },
        "1 Less (",
        this.state.sliderValue - 1,
        ")"
      ),
      React.createElement(
        "button",
        { disabled: this.state.sliderValue >= 100 ? true : false,
          className: "btn default-btn",
          onClick: this.handleChange(1) },
        "1 More (",
        this.state.sliderValue + 1,
        ")"
      )
    );
  }
});