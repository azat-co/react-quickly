var Content = React.createClass({
  getA: function(){
    return 10
  },
  render: function() {
    return (
      <div>
        <p>This value is return by the method: {this.getA()} </p>
      </div>
    );
  }
})

React.render(
  <Content />,
  document.getElementById('content')
);

