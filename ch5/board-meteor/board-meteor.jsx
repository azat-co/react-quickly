/**
 * This directive is necessary to enable preprocessing of JSX tags:
 * @jsx React.DOM
 */

var Messages = new Meteor.Collection("messages")

var MessageBoard = React.createClass({
  mixins:[ReactMeteor.Mixin],
  getMeteorState: function(){
    var name = ''
    if (Session.get('name')) name = Session.get('name')
    return {
      messages: Messages.find({}).fetch().reverse(),
      name: name
    }
  },
  startMeteorSubscriptions: function() {
    Meteor.subscribe('messages')
  },
  addMessage: function(message){
    var messages = this.state.messages
    Session.set('name', message.name)
    Messages.insert(message)
  },
  render: function(){
    return (
      <div>
        <NewMessage messages={this.state.messages} addMessageCb={this.addMessage} username={this.state.name}/>
        <MessageList messages={this.state.messages} />
      </div>
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
    // fD(this.refs.name).value = ''
    fD(this.refs.message).value = ''
  },
  keyup: function (e) {
    if (e.keyCode == 13) return this.addMessage()
  },
  render: function(){
    console.log(this.props.username)
    return (
      <div className="row-fluid" id="new-message">
        <div className="span12">
          <form className="well form-inline" onKeyUp={this.keyup}>
            <input type="text" name="username" className="input-small" placeholder="Azat" ref="name" defaultValue={this.props.username}/>
            <input type="text" name="message" className="input-small" placeholder="Hello!" ref="message" />
            <a id="send" className="btn btn-primary" onClick={this.addMessage}>POST</a>
          </form>
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




if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<MessageBoard />, document.getElementById('content'))
  })

}


if (Meteor.isServer) {
  Meteor.startup(function () {

  })
} else {

}
