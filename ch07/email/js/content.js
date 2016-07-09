class Content extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.prompt = 'Please enter your email to win $1,000,000.';
  }
  submit(event) {
    let emailAddress = this.refs.emailAddress;
    let comments = this.refs.comments;
    console.log(ReactDOM.findDOMNode(emailAddress).value);
    console.log(ReactDOM.findDOMNode(comments).value);
  }
  render() {
    return React.createElement(
      "div",
      { className: "well" },
      React.createElement(
        "p",
        null,
        this.prompt
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
}