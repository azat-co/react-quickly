var choices = ['rock',
  'paper',
  'scissors'
]

var Games = new Meteor.Collection("games")

if (Meteor.isClient) {

  var MessagesList = React.createClass({
    mixins: [ReactMeteor.Mixin],
    getMeteorState: function() {
      return {
        games: Games.find({createdBy: Meteor.userId}).fetch().reverse()
      }
    },
    makeMove: function(e){
      var opponentAnswer = Math.floor(Math.random()*3)
      var answer =e.target.getAttribute('data-answer-index')
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
      return (
        <div>
          <h1>Welcome to Rock-paper-scissors!</h1>
          <img src="/rock-paper-scissors.svg"/>
          <p>Make your move</p>
          <button onClick={this.makeMove} data-answer-index='0'>Rock</button>
          <button onClick={this.makeMove} data-answer-index='1'>Paper</button>
          <button onClick={this.makeMove} data-answer-index='2'>Scissors</button>
          {(!this.state.answer)? '': <p>You selected {choices[this.state.answer]}.<br/>
            Opponent selected {choices[this.state.opponentAnswer]}. <br/>
            Outcome: {this.state.outcome}</p> }
            <div>{this.state.games.map(function(value, index){
              if (value.outcome.indexOf('lose')>-1)
                var style = {color: 'red'}
              else
                var style = {color: 'blue'}
              console.log(value)
              return <p
                key={value._id}
                style={style}>
                  {choices[value.answer]} (you)  vs. {choices[value.opponentAnswer]}—
                  {value.outcome}
              </p>
              })}</div>
        </div>

      )
    }
  })
  Meteor.startup(function() {
    React.render(<MessagesList />, document.body);
  })

}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
