var Content = React.createClass({
  getUrl: function(){
    return 'http://webapplog.com'
  },
  render: function() {
    return (
      <div>
        <p>Your REST API URL is: <a href={this.getUrl()}>{this.getUrl()}</a></p>
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
