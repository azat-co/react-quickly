'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  NavigatorIOS
} = React;


module.exports = React.createClass({
  search(event) {
    this.props.search(event.nativeEvent.text)
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Weather App, React Quickly example
        </Text>
        <Text style={styles.instructions}>
          Enter your city name:
        </Text>
        <TextInput
          placeholder="San Francisco" returnKeyType="search"
          enablesReturnKeyAutomatically={true}
          onEndEditing={this.search} style={styles.textInput}/>
      </View>
    );
  }
});

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
  }
});
