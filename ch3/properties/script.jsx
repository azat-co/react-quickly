var Book = React.createClass({
  title: "Pro Express.js",
  publisher: "Apress",
  year: 2014,
  render: function(){
  return (
    <div><i>{this.title}</i> ({this.publisher}, {this.year})</div>
  )
  }
})

var Content = React.createClass({
  getInitialState: function(){
    return {
      githubName: 'azat-co'
    }
  },
  render: function(){
    return <div>{this.state.githubName}</div>
  }
})

React.render(
  <Book />,
  document.getElementById('content')
)
