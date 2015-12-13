'use strict';

var RunMixin = {
  getInitialState: function getInitialState() {
    return { label: 'Run' };
  },
  componentWillMount: function componentWillMount() {
    console.log('component will mount');
  },
  click: function click(e) {
    var iframe = document.getElementById('frame').src = 'http://reactjs.com';
  },
  componentDidMount: function componentDidMount() {
    console.log(React.findDOMNode(this));
  }
};
var Button = React.createClass({
  displayName: 'Button',

  mixins: [RunMixin],
  render: function render() {
    return React.createElement(
      'button',
      { onClick: this.click },
      this.state.label
    );
  }
});
var Link = React.createClass({
  displayName: 'Link',

  mixins: [RunMixin],
  render: function render() {
    return React.createElement(
      'a',
      { onClick: this.click, href: '#' },
      this.state.label
    );
  }
});
var Logo = React.createClass({
  displayName: 'Logo',

  mixins: [RunMixin],
  render: function render() {
    return React.createElement('img', { onClick: this.click, width: '40', src: 'logo.png', href: '#' });
  }
});
var Content = React.createClass({
  displayName: 'Content',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Button, null),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(Link, null),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(Logo, null),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement('iframe', { id: 'frame', src: '' })
    );
  }
});

React.render(React.createElement(Content, null), document.getElementById('content'));
//# sourceMappingURL=/Users/azat/Documents/Code/react-course/module2/mixins/script.js.map