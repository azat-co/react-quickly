render: function render() {
  return React.createElement(
    'div',
    { style: this.styles },
    React.createElement(
      'p',
      null,
      React.createElement(
        reactRouter.Link,
        { to: this.props.returnTo },
        'Back'
      )
    ),
    this.props.children
  );
}