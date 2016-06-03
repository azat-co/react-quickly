var h1 = React.createElement('h1', null, 'Hello world!');
var HelloWorld = React.createClass({
  displayName: 'HelloWorld',

  render: function () {
    return React.createElement(
      'div',
      null,
      h1,
      h1
    );
  }
});
ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content'));
