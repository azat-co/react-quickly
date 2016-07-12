const React = require('react')
module.exports = class Router extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hash: window.location.hash}
    this.updateHash = this.updateHash.bind(this)
  }
  updateHash(event) {
    // console.log(event);
    this.setState({hash: window.location.hash})
  }
  componentDidMount() {
    window.addEventListener('hashchange', this.updateHash, false)
  }
  componentWillUnmont() {
    window.removeEventListener('hashchange', this.updateHash, false)
  }
  render() {
    // console.log(this.props.mapping, this.state.hash)
    if (this.props.mapping[this.state.hash])
      return this.props.mapping[this.state.hash]
    else
      return this.props.mapping['*']
  }
}