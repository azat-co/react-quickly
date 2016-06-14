var prompt = 'Please enter your email to win $1,000,000.'
var Content = React.createClass({
  submit: function(e){
    var emailAddress = this.refs.emailAddress
    var comments = this.refs.comments
    console.log(ReactDOM.findDOMNode(emailAddress).value)
    console.log(ReactDOM.findDOMNode(comments).value)
  },
  render: function() {
    return (
      <div className="well">
        <p>{prompt}</p>
        <div className="form-group">
          Email: <input ref="emailAddress" className="form-control" type="text" placeholder="hi@azat.co"/>
        </div>
        <div className="form-group">
          Comments: <textarea ref="comments" className="form-control"  placeholder="I like your website!"/>
        </div>
        <div className="form-group">
          <a className="btn btn-primary" value="Submit" onClick={this.submit}>Submit</a>
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
