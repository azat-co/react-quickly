'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  NavigatorIOS,
  Switch,
  TouchableHighlight
} = React


module.exports = React.createClass({
  getInitialState() {
    return ({isRemember: false})
  },
  search(event) {
    console.log(this.props.isRemember)
    this.props.search(this.props.cityName, this.props.isRemember)
  },
  render: function() {
    console.log('search:', this.props.cityName, this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Weather App, React Quickly example
        </Text>
        <Text style={styles.instructions}>
          Enter your city name:
        </Text>
        <TextInput
          placeholder="San Francisco"
          value={this.props.cityName}
          returnKeyType="search"
          enablesReturnKeyAutomatically={true}
          onEndEditing={this.search} style={styles.textInput}/>
        <Text>Remember?</Text><Switch onValueChange={this.props.toggleRemember} value={this.props.isRemember}></Switch>
        <TouchableHighlight onPress={this.search}><Text style={styles.button}>Search</Text></TouchableHighlight>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  navigatorContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    borderColor: '#8E8E93',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    height: 40,
    marginLeft: 60,
    marginRight: 60,
    padding: 8,
  },
  button: {
    color: '#111',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
  	borderRadius: 20,
    fontWeight: '600',
    marginTop: 30
  }
})
