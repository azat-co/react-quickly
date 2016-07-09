var SliderValue = React.createClass({
  getInitialState() {
    return {sliderValue: 0}
  },
  handleSlide(event) {
    this.setState({sliderValue: event.detail.ui.value})
  },
  componentDidMount() {
    window.addEventListener('slide', this.handleSlide)
  },
  componentWillUnmount() {
    window.removeEventListener('slide', this.handleSlide)
  },
  render() {
    return <div className="" >
      Value: {this.state.sliderValue}
    </div>
  }
})