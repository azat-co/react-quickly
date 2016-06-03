var h1 = React.createElement('h1', null, 'Hello world!')
var HelloWorld = React.createClass({
  render: function () {
    return <div>
      {h1}
      {h1}
    </div>
  }
})
ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('content')
)
