var Content = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

React.render(
  <Content>
    <h1>React.js</h1>
    <p>Rocks</p>
  </Content>,
  document.getElementById('content')
);