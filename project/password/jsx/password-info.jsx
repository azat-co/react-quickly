const React = require('react')
class PasswordInfo extends React.Component {
  render() {
    return (
      <div>
        <h4>Password Strength</h4>
        <ul>
          {this.props.rules.map(function(processedRule, index, list){
            if (processedRule.isCompleted)
              return <li key={processedRule.key}><strike>{processedRule.rule.message}</strike></li>
            else
              return <li key={processedRule.key}>{processedRule.rule.message}</li>
          })}
        </ul>
      </div>
    )
  }
}

module.exports = PasswordInfo