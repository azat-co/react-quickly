const React = require('react')
class PasswordGenerate extends React.Component{
  render() {
    return (
      <button {...this.props} className="btn generate-btn">{this.props.children}</button>
    )
  }
}
module.exports = PasswordGenerate