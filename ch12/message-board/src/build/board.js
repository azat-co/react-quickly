React = require('react')
ReactDOM = require('react-dom')
request = require('request')

var url = 'http://localhost:3000/messages'
var fD = ReactDOM.findDOMNode

var MessageList = React.createClass({displayName: "MessageList",
  render: function(){
    var messages = this.props.messages
    if (!messages || !messages.length>0) return (
        React.createElement("p", null, "No messages yet")
    )
    return (
      React.createElement("table", {className: "table "}, 
        React.createElement("caption", null, "Messages"), 
        React.createElement("thead", null, 
          React.createElement("tr", null, 
            React.createElement("th", {className: "span2"}, "Name"), 
            React.createElement("th", {className: "span10"}, "Message")
          )
        ), 
        React.createElement("tbody", null, 
          messages.map(function(message){
            return (
              React.createElement("tr", {key: message._id}, 
                React.createElement("td", {className: "span2"}, message.name), 
                React.createElement("td", {className: "span10"}, message.message)
              )
            )
          })
        )
      )
    )
  }
})


var NewMessage = React.createClass({displayName: "NewMessage",
  addMessage: function(){
    this.props.addMessageCb({
      name: fD(this.refs.name).value,
      message: fD(this.refs.message).value
    })
    fD(this.refs.name).value = ''
    fD(this.refs.message).value = ''
  },
  keyup: function (e) {
    if (e.keyCode == 13) return this.addMessage()
  },
  render: function(){
    return (
      React.createElement("div", {className: "row-fluid", id: "new-message"}, 
        React.createElement("div", {className: "span12"}, 
          React.createElement("form", {className: "well form-inline", onKeyUp: this.keyup}, 
            React.createElement("input", {type: "text", name: "username", className: "input-small", placeholder: "Azat", ref: "name"}), 
            React.createElement("input", {type: "text", name: "message", className: "input-small", placeholder: "Hello!", ref: "message"}), 
            React.createElement("a", {id: "send", className: "btn btn-primary", onClick: this.addMessage}, "POST")
          )
        )
      )
    )
  }
})

module.exports = MessageBoard = React.createClass({displayName: "MessageBoard",
  getInitialState: function(ops){
    if (this.props.messages) return {messages: this.props.messages}
  },
  componentDidMount: function(){

    var _this = this
    request.get(url, function(result){
      console.log(result)
      if(!result || !result.length){
        return;
      }
      // console.log(result)
      _this.setState({ messages: result });
    });
  },
  addMessage: function(message){
    var messages = this.state.messages
    var _this = this
    request({method: 'POST', url: url, json: message}, function(error, response, body) {
      if(!body || error){
        return console.error('Failed to save');
      }
      messages.unshift(body)
      _this.setState({messages: messages})
    });
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(NewMessage, {messages: this.state.messages, addMessageCb: this.addMessage}), 
        React.createElement(MessageList, {messages: this.state.messages})
      )
    )
  }
})
