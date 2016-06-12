var Mouse = React.createClass({
  displayName: 'Mouse',

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { style: { border: '1px solid red' }, onMouseOver: () => {
            console.log('mouse is over');
          } },
        ' Open DevTools and move your mouse cursor over here'
      )
    );
  }
});