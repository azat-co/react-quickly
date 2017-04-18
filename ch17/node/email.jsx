const React = require('react')

const Email = (props) => {
  return (
    <div>
      <h1>Thank you {(props.name) ? props.name : ''}for signing up!</h1>
      <p>If you have any questions, please contact support</p>
    </div>
  )
}

module.exports = Email

