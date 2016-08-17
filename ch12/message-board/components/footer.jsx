React = require('react')

module.exports = Footer = React.createClass({
  render: function(){
    return (
      <div>
        <hr />
        <div className="row-fluid">
          <div className="span12">
            <div>React Quickly by Azat (<a href="http://twitter.com/azat_co" target="_blank">@azat_co</a>)</div>
          </div>
        </div>
      </div>
    )
  }
})
