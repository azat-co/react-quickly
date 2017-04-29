const React = require('react')
const { connect } = require('react-redux')
const styles = require('./app.css')

class App extends React.Component {
  render() {
    const {
      children
    } = this.props

    return (
      <div className={styles.app}>
        {children}
      </div>
    )
  }
}

module.exports = connect()(App)
