ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Radio, { name: "radio-group", id: "radio1", order: "1", label: "Credit card" }),
  React.createElement(Radio, { name: "radio-group", id: "radio2", order: "2", label: "PayPal" }),
  React.createElement(Radio, { name: "radio-group", id: "radio3", order: "3", label: "Check" })
), document.getElementById('content'));