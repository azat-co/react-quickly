var Button = React.createClass({
  getDefaultProps: function () {
    return {buttonLabel: 'Submit'}
  },
  render: function() {
    return <button >{this.props.buttonLabel}</button>
  }
})
var Content = React.createClass({
  render: function() {
    return (
      <div>
        <Button buttonLabel="Start"/>
        <Button />
        <Button />
        <Button />
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
