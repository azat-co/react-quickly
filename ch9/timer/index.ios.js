/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

var React = require('react-native')
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} = React

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  heading: {
    flex: 1,
    fontSize: 36,
    paddingTop: 40,
    margin: 10
  },
  instructions: {
    color: '#333333',
    marginBottom: 15,
  },
  button: {
    color: '#111',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
  	borderRadius: 20,
    fontWeight: '600'
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

AppRegistry.registerComponent('timer', () => TimerWrapper)


const timerOptions = [5, 7, 10, 12, 15, 20]


var TimerWrapper = React.createClass({
  getInitialState () {
    return {time: null, int: null}
  },
  startTimer(time) {
    clearInterval(this.state.int)
    var _this= this
    var int = setInterval(function() {
      console.log('2: Inside of setInterval')
      var tl = _this.state.time - 1
      if (tl == 0) clearInterval(int)
      _this.setState({time: tl})
    }, 1000)
    console.log('1: After setInterval')
    return this.setState({time: time, int: int})
  },
  render() {
    return (
      <ScrollView><View style={styles.container}>
        <Text style={styles.heading}>Timer</Text>
        <Text style={styles.instructions}>Press a button</Text>
        <View style={styles.buttons}>{timerOptions.map((item, index, list)=>{
          return <Button key={index} time={item} startTimer={this.startTimer}/>
        })}</View>
        <Timer time={this.state.time}/>
      </View></ScrollView>
    )
  }
})

var Button = React.createClass({
  startTimer(event) {
    return this.props.startTimer(this.props.time)
  },
  render() {
    return (
      <TouchableHighlight onPress={this.startTimer}>
      <Text style={styles.button}>{this.props.time} minutes</Text>
    </TouchableHighlight>
    )
  }
})

var Timer = React.createClass({
   render() {
     if (this.props.time == 0) {
      var AudioPlayer = require('react-native-audioplayer')
      AudioPlayer.play('flute_c_long_01.wav')
     }
     if (this.props.time == null || this.props.time == 0) return <View><Text  style={styles.heading}> </Text></View>
     return (
       <View>
         <Text style={styles.heading}>{this.props.time}</Text>
         <Text>Seconds left</Text>
       </View>
     )
    }
})
