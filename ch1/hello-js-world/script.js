var HelloWorld = React.createClass({
  render: function () {
    return React.createElement('h1', null, 'Hello ' + this.props.name+ ' world!!!')
  }
});

React.render(
  React.createElement(
    'div', 
    null, 
    React.createElement(HelloWorld, {name: 'Ember.js'}), 
    React.createElement(HelloWorld, {name: 'Backbone.js'}),
    React.createElement(HelloWorld, {name:'Angular.js'})
  ),
  document.getElementById('example')
)