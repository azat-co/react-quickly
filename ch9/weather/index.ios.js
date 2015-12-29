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

var Weather = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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

const openWeatherAppId = '2de143494c0b295cca9337e1e96b00e0',
  openWeatherUrl = 'http://api.openweathermap.org/data/2.5/forecast' // Real API
  // openWeatherUrl = 'http://localhost:3000/' // Mock API, start with $ node weather-api

const App = React.createClass({
  getInitialState(){
    AsyncStorage.getItem('cityName').then((value) => {
      console.log('yo', value)
      if (value) this.setState({'cityName': value, isRemember: true})
    }).done()
    return {isForecast: false, cityName: '', isRemember: false}
  },
  search(cityName, isRemember) {
    fetch(`${openWeatherUrl}/?appid=${openWeatherAppId}&q=${cityName}&units=metric`, {
      method: 'GET'
    }).then((response) => response.json())
      .then((response) => {
        if (isRemember) AsyncStorage.setItem('cityName', cityName)
        let dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        })

        this.refs.navigator.push({
          name: 'Forecast',
          component: Forecast,
          passProps: {forecastData: dataSource.cloneWithRows(response.list) }
        })

      })
      .catch((error) => {
        console.warn(error)
      })
  },
  toggleRemember() {
    console.log('toggle', this.state.isRemember)
    this.setState({ isRemember: !this.state.isRemember}, ()=>{
      if (this.state.isRemember) AsyncStorage.setItem('cityName', this.state.cityName)
    })
  },
  render() {
    return (
      <Navigator
        initialRoute={{name: 'Search', index: 0}}
        ref='navigator'
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
        renderScene={(route, navigator) => {
          console.log(route)
          if (route.name == 'Forecast') return React.createElement(route.component, route.passProps)
          return <Search
            search={this.search}
            cityName={this.state.cityName}
            isRemember={this.state.isRemember}
            toggleRemember={this.toggleRemember}
            name={route.name}
            onForward={() => {
              var nextIndex = route.index + 1;
              navigator.push({
                name: 'Forecast',
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
        }
      />
    )
  }
})

class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText, ]}>
          {'<'} {previousRoute.name}
        </Text>
      </TouchableOpacity>
    );
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
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.name}
      </Text>
    );
  },

};


const Forecast = require('./forecast.ios')
const Search = require('./search.ios.js')

AppRegistry.registerComponent('weather', () => App)
