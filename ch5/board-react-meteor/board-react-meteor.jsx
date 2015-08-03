/**
 * This directive is necessary to enable preprocessing of JSX tags:
 * @jsx React.DOM
 */

var Messages = new Meteor.Collection("messages")

if (Meteor.isClient) {
  var MessagesList = React.createClass({
    templateName: 'content',
    mixins: [ReactMeteor.Mixin],

    startMeteorSubscriptions: function() {
      Meteor.subscribe("messages");
    },

    // Make sure your component implements this method.
    getMeteorState: function() {
      return {
        messages: Messages.find()
      };
    },
    render: function() {
      // console.log(this.state.messages)
      return (
        <ul>
          {this.state.messages.map(function(message){
            return <li key={message._id}>{message.name}: {message.message}</li>
          })}
        </ul>
      )
    }
  })
  // React.render(<MessagesList/>, document.getElementById('content'))
  Meteor.startup(function() {
    // console.log(document.getElementById('content'))
    React.render(<MessagesList />, document.getElementById('content'));
  })

  // counter starts at 0
  Session.setDefault('counter', 0);
  // Template.content.helpers({
  //   messageList: function() {
  //     return <MessagesList/>
  //   }
  // })
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}


if (Meteor.isServer) {
  Meteor.publish("messages", function() {
    return Messages.find();
  });
  Meteor.startup(function () {
    // code to run on server at startup
    // var bodyHtml = React.renderToString(<MessagesList />);
  });
} else {

}
