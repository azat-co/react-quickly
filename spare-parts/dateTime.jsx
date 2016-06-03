var DateTimeNow = React.createClass({
  render: function() {
    var dateTimeNow = new Date()
    return <span>Current date and time is {dateTimeNow}.</span>
    )
  }
})