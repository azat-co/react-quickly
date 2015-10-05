var Content = React.createClass({
  getUrl: function(){
    return 'http://corereact.com'
  },
  render: function() {
    return (
      <div>
        <p>Your REST API URL is: {this.getUrl()}</p>
      </div>
    )
  }
})

React.render(
  <Content />,
  document.getElementById('content')
);
