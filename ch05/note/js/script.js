let secondsLeft = 5;

let interval = setInterval(() => {
  if (secondsLeft == 0) {
    ReactDOM.render(React.createElement(
      'div',
      null,
      'Note was removed after ',
      secondsLeft,
      ' seconds.'
    ), document.getElementById('content'));
    clearInterval(interval);
  } else {
    ReactDOM.render(React.createElement(
      'div',
      null,
      React.createElement(Note, { secondsLeft: secondsLeft })
    ), document.getElementById('content'));
  }
  secondsLeft--;
}, 1000);