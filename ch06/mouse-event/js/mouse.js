class Mouse extends React.Component {
  handleMouseOver(event) {
    console.log('mouse is over with event');
    window.e = event; // Anti-pattern
    console.dir(event.target);
    setTimeout(() => {
      console.table(event.target);
      console.table(window.e.target);
    }, 2345);
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        {
          style: { border: '1px solid red' },
          onMouseOver: this.handleMouseOver.bind(this) },
        'Open DevTools and move your mouse cursor over here'
      )
    );
  }
}