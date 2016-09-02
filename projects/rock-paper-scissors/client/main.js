// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './main.html';
//
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

const React = require('react')

var choices = ['rock',
  'paper',
  'scissors'
]

var Games = new Mongo.Collection('games')

if (Meteor.isClient) {
  var App = React.createClass({
    mixins: [ReactMeteorData],
    getInitialState: function(){
      return {
        answer: ''
      }
    },
    getMeteorData: function() {
      return {
        games: Games.find({createdBy: Meteor.userId}).fetch().reverse()
      }
    },
    makeMove: function(e) {
      var opponentAnswer = Math.floor(Math.random()*3)
      var answer = e.target.getAttribute('data-answer-index')
      var outcome = rps.compare(answer, opponentAnswer, choices)
      this.setState({opponentAnswer: opponentAnswer,
        answer: answer,
        outcome: outcome
      })
      Games.insert({
        createdBy: Meteor.userId,
        opponentAnswer: opponentAnswer,
        answer: answer,
        outcome: outcome})
    },
    render: function() {
      var winCount = 0
      return (
        <div>
          <h1>Welcome to Rock-paper-scissors!</h1>
          <p>Make your move!&nbsp;
          <button className="btn btn-default" onClick={this.makeMove} data-answer-index='0'>Rock</button>
          <button className="btn btn-default"  onClick={this.makeMove} data-answer-index='1'>Paper</button>
          <button className="btn btn-default"  onClick={this.makeMove} data-answer-index='2'>Scissors</button>
          </p>
          <figure>
            <img src="/rock-paper-scissors.svg" width="300"/>
            <figcaption>Rules</figcaption>
          </figure>

          {(!this.state.answer)? '': <div><h2>Result</h2><p>You selected {choices[this.state.answer]}.<br/>
            Opponent selected {choices[this.state.opponentAnswer]}. <br/>
            Outcome: {this.state.outcome}</p></div>
          }
          {(this.data.games.length<1) ? '' : <h2>History</h2>}
          {(this.data.games.length<1) ? '' : <p>Recent games first</p>}
          <table><tbody>{this.data.games.map(function(value, index){
            if (value.outcome.indexOf('lose')>-1) {
              var style = {color: 'red'}
            }
            else {
              winCount++
              var style = {color: 'blue'}
            }
            return <tr><td
              key={value._id}
              style={style}>
                {index+1}: {choices[value.answer]} (you)  vs. {choices[value.opponentAnswer]}—
                {value.outcome}
            </td></tr>
        })}</tbody></table>
        <h2>Total wins: {winCount} which is {Math.round(winCount/this.data.games.length*10000)/100}%.</h2>
        </div>
      )
    }
  })

  Meteor.startup(function() {
    ReactDOM.render(<App />, document.getElementById('content'))
  })

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // Code to run on server at startup
  });
}

