/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

var React = require('react-native'),
  AudioPlayer = require('react-native-audioplayer')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch
} = React

const timerOptions = [5, 7, 10, 12, 15, 20]

var TimerWrapper = React.createClass({
  getInitialState () {
    return {time: null, int: null, isMinutes: false}
  },
  toggleTime(){
    let time = this.state.time
    if (time == 0 ) time = null
    this.setState({isMinutes: !this.state.isMinutes, time: time})
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
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Timer</Text>
          <Text style={styles.instructions}>Press a button</Text>
          <View style={styles.buttons}>
            {timerOptions.map((item, index, list)=>{
              return <Button key={index} time={item} startTimer={this.startTimer} isMinutes={this.state.isMinutes}/>
            })}
          </View>
          <Text>Minutes</Text>
          <Switch onValueChange={this.toggleTime} value={this.state.isMinutes}></Switch>
          <Timer time={this.state.time}/>
        </View>
      </ScrollView>
    )
  }
})

var Button = React.createClass({
  startTimer(event) {
    let time = (this.props.isMinutes) ? this.props.time*60 : this.props.time
    return this.props.startTimer(time)
  },
  render() {
    return (
      <TouchableOpacity onPress={this.startTimer}>
        <Text style={styles.button}>{this.props.time} {(this.props.isMinutes) ? 'minutes' : 'seconds'}</Text>
      </TouchableOpacity>
    )
  }
})

var Timer = React.createClass({
   render() {
     if (this.props.time == 0) {
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
