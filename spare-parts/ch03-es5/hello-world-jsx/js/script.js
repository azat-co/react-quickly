// var helloWorldReactElement = <h1>Hello world!</h1>
// ReactDOM.render(
//   helloWorldReactElement,
//   document.getElementById('content')
// )

ReactDOM.render(React.createElement(
  'h1',
  null,
  'Hello world!'
), document.getElementById('content'));
