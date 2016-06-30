var helloWorldReactElement = <h1>Hello world!</h1>
var HelloWorld = React.createClass({
  render() {
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
