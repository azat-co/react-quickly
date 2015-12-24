var url = 'http://localhost:3000/messages'

var Actions = Reflux.createActions([
  'loadMessages',
  'addMessage'
])

var messagesStore = Reflux.createStore({
    listenables: [Actions],
    init: function() {
      this.messages = [{_id: 1, name: 'Azat', message: 'hi'}]
    },
    getInitialState: function(){
      return this.messages
    },
    onLoadMessages: function() {
      $.ajax(url, {}).done(function(data) {
        this.messages = data
        this.trigger(data)
      }.bind(this))
    },
    onAddMessage: function(message){
      var _this = this
      $.post( url, message, function(data) {
        if(!data){
          return console.error('Failed to save')
        }
        _this.messages.unshift(data)
        _this.trigger(_this.messages)
      })
    }
})
var MessageBoard = React.createClass({
  mixins: [Reflux.connect(messagesStore, 'messages')],
  componentWillMount: function(){
    Actions.loadMessages()
  },
  render: function(){
    return (
      <div>
        <NewMessage
          messages={this.state.messages}
          addMessageCb={Actions.addMessage} />
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
})

var NewMessage = React.createClass({
  addMessage: function(){
    var fD = ReactDOM.findDOMNode
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
            <input
              type="text"
              name="username"
              className="input-small"
              placeholder="Azat"
              ref="name"/>
            <input type="text"
              name="message"
              className="input-small"
              placeholder="Hello!"
              ref="message" />
            <a id="send"
              className="btn btn-primary"
              onClick={this.addMessage}>POST</a>
          </form>
        </div>
      </div>
    )
  }
})

var MessageList = React.createClass({
  render: function(){
    var messages = this.props.messages
    if (!messages.length > 0) return (
      <p>
        No messages yet
      </p>
    )
    return (
      <table className="table table-bordered">
        <caption>Messages</caption>
        <thead>
          <tr>
            <th className="col-md-2">Name</th>
            <th className="col-md-10">Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(function(message){
            return (
              <tr key={message._id}>
                <td className="col-md-2">{message.name}</td>
                <td className="col-md-10">{message.message}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
})

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
            <div>React Quickly by Azat (
                <a href="http://twitter.com/azat_co" target="_blank">@azat_co</a>)
            </div>
          </div>
        </div>
      </div>
    )
  }
})


ReactDOM.render(<Header />, document.getElementById('header'))
ReactDOM.render(<Footer />, document.getElementById('footer'))
ReactDOM.render(<MessageBoard />, document.getElementById('message-board'))
