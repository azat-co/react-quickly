'use strict';

var Tooltip = React.createClass({
  displayName: 'Tooltip',

  getInitialState: function getInitialState() {
    return {
      opacity: false
    };
  },
  toggle: function toggle() {
    console.log(this.state.opacity);
    var tooltipNode = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    });
  },
  render: function render() {
    var style = {
      zIndex: this.state.opacity ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 20,
      left: (this.state.left || 0) - 30
    };
    // var p= React.cloneElement(<div className="tooltip bottom" role="tooltip">
    //   <div className="tooltip-arrow"></div>
    //   <div className="tooltip-inner">
    //     {this.props.text}
    //   </div>
    // </div>, {style:style})
    // console.log(p)
    return React.createElement(
      'div',
      { style: { display: 'inline' } },
      React.createElement(
        'span',
        { style: { color: 'blue' }, onMouseEnter: this.toggle, onMouseOut: this.toggle },
        this.props.children
      ),
      React.createElement(
        'div',
        { className: 'tooltip bottom', style: style, role: 'tooltip' },
        React.createElement('div', { className: 'tooltip-arrow' }),
        React.createElement(
          'div',
          { className: 'tooltip-inner' },
          this.props.text
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(
    Tooltip,
    { text: 'Master Express.js-The Node.js Framework For Your Web Development' },
    'Pro Express.js'
  ),
  ' was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress after ',
  React.createElement(
    Tooltip,
    { text: 'Practical Node.js: Building Real-World Scalable Web Apps' },
    'Practical Node.js'
  ),
  '. ... The main focus of this post is to compare the four Node.js/Io.js frameworks: ',
  React.createElement(
    Tooltip,
    { text: 'HTTP API server' },
    'Hapi'
  ),
  ', ',
  React.createElement(
    Tooltip,
    { text: 'Release the Kraken!' },
    'Kraken'
  ),
  ', ',
  React.createElement(
    Tooltip,
    { text: 'Sail away' },
    'Sails.js'
  ),
  ' and ',
  React.createElement(
    Tooltip,
    { text: 'IBM of frameworks' },
    'Loopback'
  ),
  '. There are many other frameworks to consider, but I had to draw the line somewhere.'
), document.getElementById('tooltip'));
