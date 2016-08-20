'use strict'

var React = require('react-native')
const Forecast = require('./forecast.ios')

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  TouchableHighlight,
  ListView,
  Alert
} = React

// URL for London, response.json: http://api.openweathermap.org/data/2.5/forecast?q=London&appid=2de143494c0b295cca9337e1e96b00e0&units=metric

const openWeatherAppId = '2de143494c0b295cca9337e1e96b00e0', // Don't be lazy, get your own KEY!
  // openWeatherUrl = 'http://api.openweathermap.org/data/2.5/forecast' // Real API
  openWeatherUrl = 'http://localhost:3000/' // Mock API, start with $ node weather-api

module.exports = React.createClass({
  getInitialState() {
    this.props.storage.getFromStorage('cityName', (cityName) => {
      if (cityName) this.setState({cityName: cityName, isRemember: true})
    })
    return ({isRemember: false, cityName: ''})
  },
  toggleRemember() {
    console.log('toggle: ', this.state.isRemember)
    this.setState({ isRemember: !this.state.isRemember}, ()=>{
      if (!this.state.isRemember) this.props.storage.removeItem('cityName')
    })
  },
  handleCityName(cityName) {
    this.setState({ cityName: cityName})
  },
  search(event) {
    let cityName = this.state.cityName,
      isRemember = this.state.isRemember
    if (!cityName) return Alert.alert('No City Name',
      'Please enter city name',
      [{text: 'OK', onPress: () => console.log('OK Pressed!')}]
    )
    fetch(`${openWeatherUrl}/?appid=${openWeatherAppId}&q=${cityName}&units=metric`, {
      method: 'GET'
    }).then((response) => response.json())
      .then((response) => {
        if (isRemember) this.props.storage.setInStorage('cityName', cityName)
        let dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        })
        this.props.navigator.push({
          name: 'Forecast',
          component: Forecast,
          passProps: {
            forecastData: dataSource.cloneWithRows(response.list),
            forecastRaw: response
          }
        })
      })
      .catch((error) => {
        console.warn(error)
      })
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Weather App, React Quickly project
        </Text>
        <Text style={styles.instructions}>
          Enter your city name:
        </Text>
        <TextInput
          placeholder="San Francisco"
          value={this.state.cityName}
          returnKeyType="search"
          enablesReturnKeyAutomatically={true}
          onChangeText={this.handleCityName}
          onEndEditing={this.search} style={styles.textInput}/>
        <Text>Remember?</Text>
        <Switch onValueChange={this.toggleRemember} value={this.state.isRemember}></Switch>
        <TouchableHighlight onPress={this.search}>
          <Text style={styles.button}>Search</Text>
        </TouchableHighlight>
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
