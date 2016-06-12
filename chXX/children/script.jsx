var Content = React.createClass({
  render: function() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
  <div>
    <Content>
      <h1>React.js</h1>
      <p>Rocks</p>
    </Content>
    <Content>
      <span>&copy;</span>
    </Content>
  </div>,
  document.getElementById('content')
)
