const EnhancedButton = LoadWebsite(Button);
const EnhancedLink = LoadWebsite(Link);
const EnhancedLogo = LoadWebsite(Logo);

class Content extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(EnhancedButton, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(EnhancedLink, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement(EnhancedLogo, null),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement("iframe", { id: "frame", src: "", width: "600", height: "500" })
    );
  }
}