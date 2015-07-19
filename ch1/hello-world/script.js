var HelloWorld = React.createClass({
  render: function render() {
    return React.createElement('h1', null, 'Hello world!!!')
  }
});

React.render(
  React.createElement(
    'div', 
    null, 
    React.createElement(HelloWorld, null), 
    React.createElement(HelloWorld, null),
    React.createElement(HelloWorld, null)
  ),
  document.getElementById('example')
)