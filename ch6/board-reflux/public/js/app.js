var Header = React.createClass({displayName: "Header",
  render: function(){
    return (
      React.createElement("h1", null, "Message Board")
    )
  }
})

var Footer = React.createClass({displayName: "Footer",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("hr", null), 
        React.createElement("div", {className: "row-fluid"}, 
          React.createElement("div", {className: "span12"}, 
            React.createElement("div", null, "The React.js Course by Azat (", React.createElement("a", {href: "http://twitter.com/azat_co", target: "_blank"}, "@azat_co"), ")")
          )
        )
      )
    )
  }
})


var MessageList = React.createClass({displayName: "MessageList",
  render: function(){
    var messages = this.props.messages
    // console.log(messages)
    if (!messages.length>0) return (
      React.createElement("tr", null, 
        React.createElement("td", {colspan: "2"}, "No messages yet")
      )
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
    var fD = React.findDOMNode
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
var url = 'http://localhost:3000/messages'

var Actions = Reflux.createActions([
  'loadMessages',
  'addMessage'
])

var messagesStore = Reflux.createStore({
    listenables: [Actions],
    init: function() {
      this.messages = []
    },
    onLoadMessages: function() {
      $.ajax(url, {}).done(function(data) {
        this.messages = data
        this.trigger(data)
        // console.log(data)
      }.bind(this))
    },
    onAddMessage: function(message){
      var _this = this
      $.post( url, message, function(data) {
        if(!data){
          return console.error('Failed to save');
        }
        // console.log(data, this.state)
        _this.messages.unshift(data)
        _this.trigger(_this.messages)
      })
    }
})

var MessageBoard = React.createClass({displayName: "MessageBoard",
  getInitialState: function(){
    Actions.loadMessages()
    return {messages: [{_id: 1, name: 'Azat', message: 'hi'}]}
  },
  componentWillMount: function(){
    this.unsubscribe =  messagesStore.listen(this.updateMessages)
  },
  componentWillUnmount: function() {
    return this.unsubscribe()
  },
  updateMessages: function(messages) {
    this.setState({messages: messages})
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(NewMessage, {messages: this.state.messages, addMessageCb: Actions.addMessage}), 
        React.createElement(MessageList, {messages: this.state.messages})
      )
    )
  }
})

React.render(React.createElement(Header, null), document.getElementById('header'))
React.render(React.createElement(Footer, null), document.getElementById('footer'))
React.render(React.createElement(MessageBoard, null), document.getElementById('message-board'))
