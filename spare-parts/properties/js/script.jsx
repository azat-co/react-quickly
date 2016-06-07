var Book = React.createClass({
  title: "Pro Express.js",
  publisher: "Apress",
  year: 2014,
  render: function(){
    this.props.title = 'new title'
  return (
    <div>
      <i>{this.title} {this.props.title}</i>
      ({this.publisher}, {this.year})
    </div>
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

ReactDOM.render(
  <Book title='old title'/>,
  document.getElementById('content')
)
