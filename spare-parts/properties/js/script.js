var Book = React.createClass({
  displayName: "Book",

  title: "Pro Express.js",
  publisher: "Apress",
  year: 2014,
  render: function () {
    this.props.title = 'new title';
    return React.createElement(
      "div",
      null,
      React.createElement(
        "i",
        null,
        this.title,
        " ",
        this.props.title
      ),
      "(",
      this.publisher,
      ", ",
      this.year,
      ")"
    );
  }
});

var Content = React.createClass({
  displayName: "Content",

  getInitialState: function () {
    return {
      githubName: 'azat-co'
    };
  },
  render: function () {
    return React.createElement(
      "div",
      null,
      this.state.githubName
    );
  }
});

ReactDOM.render(React.createElement(Book, { title: "old title" }), document.getElementById('content'));
