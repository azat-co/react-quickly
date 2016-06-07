var TimeDisplay = function (props) {
  var date = new Date(props.time);
  // date = new Date('6/7/2016, 8:41:21 AM')
  var handStyle = {
    position: 'relative',
    top: 110,
    left: 110,
    border: '1px solid grey',
    width: 80,
    height: 4,
    transform: 'rotate(' + (date.getHours() / 12 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%'
  };
  var secondHandStyle = {
    position: 'relative',
    top: 110,
    left: 110,
    border: '1px solid grey',
    width: 100,
    height: 1,
    transform: 'rotate(' + (date.getSeconds() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%'
  };
  var minuteHandStyle = {
    position: 'relative',
    top: 110,
    left: 110,
    border: '1px solid grey',
    width: 100,
    height: 2,
    transform: 'rotate(' + (date.getMinutes() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%'
  };
  var dialStyle = {
    position: 'absolute',
    top: 150,
    left: 150,
    borderColor: 'black',
    width: 220,
    height: 220,
    borderRadius: 20000,
    borderStyle: 'solid'
  };
  console.log(date.getHours() / 12 * 360 - 90);
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { style: dialStyle },
      React.createElement('div', { style: minuteHandStyle }),
      React.createElement('div', { style: secondHandStyle }),
      React.createElement('div', { style: handStyle })
    ),
    React.createElement('br', null),
    props.time
  );
};