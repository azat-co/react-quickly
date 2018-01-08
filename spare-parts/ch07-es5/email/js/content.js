var prompt = 'Please enter your email to win $1,000,000.';
var Content = React.createClass({
  displayName: "Content",

  submit: function (e) {
    var emailAddress = this.refs.emailAddress;
    var comments = this.refs.comments;
    console.log(ReactDOM.findDOMNode(emailAddress).value);
    console.log(ReactDOM.findDOMNode(comments).value);
  },
  render: function () {
    return React.createElement(
      "div",
      { className: "well" },
      React.createElement(
        "p",
        null,
        prompt
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        "Email: ",
        React.createElement("input", { ref: "emailAddress", className: "form-control", type: "text", placeholder: "hi@azat.co" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        "Comments: ",
        React.createElement("textarea", { ref: "comments", className: "form-control", placeholder: "I like your website!" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "a",
          { className: "btn btn-primary", value: "Submit", onClick: this.submit },
          "Submit"
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));