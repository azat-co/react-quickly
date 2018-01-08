var helloWorldReactElement = <h1>Hello world!</h1>
var HelloWorld = React.createClass({
  render: function () {
    return <div>
      {helloWorldReactElement}
      {helloWorldReactElement}
    </div>
  }
})
ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('content')
)
