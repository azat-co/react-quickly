'use strict';

var React = require('react');

var Email = function Email(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Thank you ',
      props.name ? props.name : '',
      'for signing up!'
    ),
    React.createElement(
      'p',
      null,
      'If you have any questions, please contact support'
    )
  );
};

module.exports = Email;