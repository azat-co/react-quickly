var h1 = React.createElement('h1', null, 'Hello world!')
var helloWorld = React.createClass({
  render: function () {
    return React.createElement('div', null, h1, h1)
  }
})
ReactDOM.render(
  React.createElement(helloWorld, null),
  document.getElementById('content')
)
