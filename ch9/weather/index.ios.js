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
  Navigator,
  ListView,
  AsyncStorage,
  TouchableOpacity,
  PixelRatio
} = React

const Search = require('./search.ios.js')

const storage = {
  getFromStorage(name, callback) {
    AsyncStorage.getItem(name).then((value) => {
      console.log(`AsyncStorage GET for ${name}: "${value}"`)
      if (value) callback(value)
      else callback(null)
    }).done()
  },
  setInStorage(name, value) {
    console.log(`AsyncStorage SET for ${name}: "${value}"`)
    AsyncStorage.setItem(name, value)
  },
  removeItem: AsyncStorage.removeItem
}

const App = React.createClass({
  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Search',
          index: 0,
          component: Search,
          passProps: {
            storage: storage
          }
        }}
        ref='navigator'
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
        renderScene={(route, navigator) => {
          console.log(route)
          let props = route.passProps
          props.navigator = navigator
          props.name = route.name
          return React.createElement(route.component, props)
        }
        }
      />
    )
  }
})

const NavButton =  React.createClass({
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
})

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null
    }

    var previousRoute = navState.routeStack[index - 1]
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText, ]}>
          {'<'} {previousRoute.name}
        </Text>
      </TouchableOpacity>
    )
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.push(newRandomRoute())}
        style={styles.navBarRightButton}>
        {//<Text style={[styles.navBarText, styles.navBarButtonText]}>
        //   Next
        // </Text>
      }
      </TouchableOpacity>
    )
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.name}
      </Text>
    )
  },

}



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
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: 'blue',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: 'black'
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },

})


AppRegistry.registerComponent('weather', () => App)
