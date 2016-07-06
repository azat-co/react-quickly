ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(
    Content,
    null,
    React.createElement(
      "h1",
      null,
      "React"
    ),
    React.createElement(
      "p",
      null,
      "Rocks"
    )
  ),
  React.createElement(
    Content,
    null,
    React.createElement("img", { src: "images/azat.jpg", width: "100" })
  ),
  React.createElement(
    Content,
    null,
    React.createElement(
      "a",
      { href: "http://react.rocks" },
      "http://react.rocks"
    )
  ),
  React.createElement(
    Content,
    null,
    React.createElement(
      "a",
      { className: "btn btn-danger", href: "http://react.rocks" },
      "http://react.rocks"
    )
  )
), document.getElementById('content'));