React = require('react')
ReactDOM = require('react-dom')
request = require('request')

var url = 'http://localhost:3000/messages'
var fD = ReactDOM.findDOMNode

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

module.exports = MessageBoard = React.createClass({
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
      <div>
        <NewMessage messages={this.state.messages} addMessageCb={this.addMessage} />
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
})
