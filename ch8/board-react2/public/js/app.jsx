React = (typeof module !== 'undefined' && module.exports) ? require('react/addons') : window.React

var Header = React.createClass({
  render: function(){
    return (
      <h1>Message Board</h1>
    )
  }
})

var Footer = React.createClass({
  render: function(){
    return (
      <div>
        <hr />
        <div className="row-fluid">
          <div className="span12">
            <div>The React.js Course by Azat (<a href="http://twitter.com/azat_co" target="_blank">@azat_co</a>)</div>
          </div>
        </div>
      </div>
    )
  }
})


var MessageList = React.createClass({
  render: function(){
    var messages = this.props.messages
    if (!messages || !messages.length>0) return (
        <p>No messages yet</p>
    )
    return (
      <table className="table ">
        <caption>Messages</caption>
        <thead>
          <tr>
            <th className="span2">Name</th>
            <th className="span10">Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(function(message){
            return (
              <tr key={message._id}>
                <td className="span2">{message.name}</td>
                <td className="span10">{message.message}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
})


var NewMessage = React.createClass({
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
      <div className="row-fluid" id="new-message">
        <div className="span12">
          <form className="well form-inline" onKeyUp={this.keyup}>
            <input type="text" name="username" className="input-small" placeholder="Azat" ref="name"/>
            <input type="text" name="message" className="input-small" placeholder="Hello!" ref="message" />
            <a id="send" className="btn btn-primary" onClick={this.addMessage}>POST</a>
          </form>
        </div>
      </div>
    )
  }
})

var MessageBoard = React.createClass({
  getInitialState: function(ops){
    if (this.props.messages) return {messages: this.props.messages}
  },
  componentDidMount: function(){
    var url = 'http://localhost:5000/messages'
    var _this = this
    $.getJSON(url, function(result){
      // console.log(result)
      if(!result || !result || !result.length){
        return;
      }
      // console.log(result)
      _this.setState({ messages: result });
    });
  },
  addMessage: function(message){
    var messages = this.state.messages
    var _this = this
    $.post( 'http://localhost:5000/messages', message, function(data) {
      if(!data){
        return console.error('Failed to save');
      }
      messages.unshift(data)
      _this.setState({messages: messages})
    });
  },
  render: function(){
    return (
      <div>
        <NewMessage messages={this.state.messages} addMessageCb={this.addMessage} />
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
})
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Header: Header,
    Footer: Footer,
    MessageBoard: MessageBoard
  }
} else {
  React.render(<Header />, document.getElementById('header'))
  React.render(<Footer />, document.getElementById('footer'))
  React.render(<MessageBoard messages={messages}/>, document.getElementById('message-board'))
}
