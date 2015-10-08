


var ToolTip = React.createClass({
  getInitialState: function() {
    return {
      opacity: false
    }
  },
  toggle: function(){
    var n = this.getDOMNode()
    this.setState({
      opacity: !this.state.opacity,
      top: n.offsetTop,
      left: n.offsetLeft
    })
  },
  render: function () {
    var style = {
      opacity: +this.state.opacity,
      top: this.state.top +20,
      left: this.state.left
    }
    return (
        <div style={{display: 'inline'}}>
          <span style={{color: 'blue'}} onMouseEnter={this.toggle} onMouseOut={this.toggle}>
            {this.props.children}
          </span>
          <div className="tooltip bottom" style={style} role="tooltip">
            <div className="tooltip-arrow"></div>
            <div className="tooltip-inner">
              {this.props.text}
            </div>
          </div>

        </div>

    )
  }
})

React.render(<p>
  <ToolTip text="Master Express.js—The Node.js Framework For Your Web Development">Pro Express.js</ToolTip> was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress
    after <ToolTip text="Practical Node.js: Building Real-World Scalable Web Apps">Practical Node.js</ToolTip>.

    <ToolTip text="Master Express.js—The Node.js Framework For Your Web Development">Pro Express.js</ToolTip> was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress
      after <ToolTip text="Practical Node.js: Building Real-World Scalable Web Apps">Practical Node.js</ToolTip>.


      <ToolTip text="Master Express.js—The Node.js Framework For Your Web Development">Pro Express.js</ToolTip> was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress
        after <ToolTip text="Practical Node.js: Building Real-World Scalable Web Apps">Practical Node.js</ToolTip>.


        <ToolTip text="Master Express.js—The Node.js Framework For Your Web Development">Pro Express.js</ToolTip> was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress
          after <ToolTip text="Practical Node.js: Building Real-World Scalable Web Apps">Practical Node.js</ToolTip>.


          <ToolTip text="Master Express.js—The Node.js Framework For Your Web Development">Pro Express.js</ToolTip> was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress
            after <ToolTip text="Practical Node.js: Building Real-World Scalable Web Apps">Practical Node.js</ToolTip>.
  </p>,
  document.getElementById('tooltip'))
