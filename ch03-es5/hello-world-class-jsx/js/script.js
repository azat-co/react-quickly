var helloWorldReactElement = React.createElement(
  'h1',
  null,
  'Hello world!'
);
var HelloWorld = React.createClass({
  displayName: 'HelloWorld',

  render: function () {
    return React.createElement(
      'div',
      null,
      helloWorldReactElement,
      helloWorldReactElement
    );
  }
});
ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content'));
