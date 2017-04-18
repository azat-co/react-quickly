
class AddSub extends React.Component {
  constructor(props) {
    super(props)
    this.state.value = this.props.defaultValue
    this.handleResize = this.handleResize.bind(this)
  }
  getStyle(i, m) {
    let value = i*m
    return {
      top: value,
      bottom: value,
      left: value,
      right: value,
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  handleResize(e) {
    let w = 1+ Math.round(window.innerWidth / 300)
    this.setState({
      taggerStyle: {top: this.props.order*w*10, width: w*10, height: w*10},
      textStyle: {left: w*13, fontSize: 7*w}
    })
  }
  render(){
    return <div>
      <div className="radio-tagger" style={this.state.taggerStyle}>
        <input type="radio" name={this.props.name} id={this.props.id}>
        </input>
        <label htmlFor={this.props.id}>
          <div className="radio-text" style={this.state.textStyle}>{this.props.label}</div>
          <div className="radio-outer" style={this.state.outerStyle}>
            <div className="radio-inner" style={this.state.innerStyle}>
              <div className="radio-selected" style={this.state.selectedStyle}>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  }
}