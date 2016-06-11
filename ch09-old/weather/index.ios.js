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
          let props = route.passProps
          props.navigator = navigator
          props.name = route.name
          props.app = this
          return React.createElement(route.component, props)
        }}
      />
    )
  }
})


var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index == 0) return null
    var previousRoute = navState.routeStack[index - 1]
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText ]}>
          {'<'} {previousRoute.name}
        </Text>
      </TouchableOpacity>
    )
  },
  RightButton(route, navigator, index, navState) {
    return (
      <View/>
    )
  },
  Title(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.name}
      </Text>
    )
  }
}

var styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD'
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
  }
})

AppRegistry.registerComponent('weather', () => App)
