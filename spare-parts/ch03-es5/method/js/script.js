var Content = React.createClass({
  displayName: 'Content',

  getUrl: function () {
    return 'http://webapplog.com';
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Your REST API URL is: ',
        React.createElement(
          'a',
          { href: this.getUrl() },
          this.getUrl()
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
