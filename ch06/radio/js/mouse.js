var Mouse = React.createClass({
  displayName: 'Mouse',

  handleMouseOver(event) {
    console.log('mouse is over with event');
    window.e = event;
    console.dir(event.target);
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        {
          style: { border: '1px solid red' },
          onMouseOver: this.handleMouseOver },
        'Open DevTools and move your mouse cursor over here'
      )
    );
  }
});