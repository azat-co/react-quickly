var DateTimeNow = React.createClass({
  render: function() {
    var dateTimeNow = new Date()
    return React.createElement(
      'span',
      null,
      'Current date and time is ' + dateTimeNow+ '.'
    )
  }
})