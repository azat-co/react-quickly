'use strict'

var React = require('react-native')
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  ScrollView
} = React

const cToF = (c) => {
  return Math.round((c*1.8 + 32)*100)/100
}

const ForecastRow = (forecast)=> {
  return (
    <View style={styles.row}>
      <View style={styles.rightContainer}>
        <Text style={styles.subtitle}></Text>
        <Text style={styles.subtitle}>
          {forecast.dt_txt}: {forecast.weather[0].description}, {forecast.main.temp}C/{cToF(forecast.main.temp)}F
        </Text>
       </View>
    </View>
  )
}

module.exports = React.createClass({
  render: function() {
    return (
      <ScrollView style={styles.scroll}>
        <Text style={styles.text}>{this.props.forecastRaw.city.name}</Text>
        <ListView dataSource={this.props.forecastData} renderRow={ForecastRow} style={styles.listView}/>
      </ScrollView>
    )
  }
})

var styles = StyleSheet.create({
  listView: {
    marginTop: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5AC8FA',
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 1
  },
  rightContainer: {
    flex: 1
  },
  scroll: {
    flex: 1,
    padding: 5
  },
  text: {
    marginTop: 80,
    fontSize: 40
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  }
})
