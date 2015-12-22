var Messages = new Mongo.Collection('messages')

var Chat = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState: function(){
    return {}
  },
  getMeteorData: function(){
    return {
      messages: Messages.find({}).fetch().reverse()
    }
  },
  addMessage: function(message){
    Messages.insert(message)
  },
  render: function(){
    return (
      <div>
        <h1>Chat</h1>
        <p>This application uses React and Meteor. This example is for the React Quickly book.</p>
        <NewMessage
          addMessageCb={this.addMessage}/>
        <MessageList messages={this.data.messages} />
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
    fD(this.refs.message).value = ''
  },
  keyup: function (event) {
    if (event.keyCode == 13) return this.addMessage()
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
            <input
              type="text"
              name="message"
              className="input-small"
              placeholder="Hello!"
              ref="message" />
            <a id="send"
              className="btn btn-primary"
              onClick={this.addMessage}>
              POST
            </a>
          </form>
        </div>
      </div>
    )
  }
})

var MessageList = React.createClass({
  render: function(){
    var messages = this.props.messages
    if (!messages || !messages.length > 0) return (
      <p>No messages yet</p>
    )
    return (
      <table className="table">
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

if (Meteor.isClient) {
  Meteor.startup(function() {
    ReactDOM.render(<Chat />, document.getElementById('content'))
  })
}


if (Meteor.isServer) {
  Meteor.startup(function () {
  })
} else {

}
