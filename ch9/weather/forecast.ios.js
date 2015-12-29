'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  NavigatorIOS,
  ListView,
  ScrollView
} = React;


const ForecastRow = (forecast)=> {
  console.log(forecast)
  return (
    <View style={styles.row}>
      <View style={styles.rightContainer}>
        <Text style={styles.subtitle}></Text>
        <Text style={styles.subtitle}>
          {forecast.dt_txt}: {forecast.weather[0].description}, {forecast.main.temp}
        </Text>
       </View>
    </View>
  )
}
module.exports = React.createClass({
  render: function() {
    return (
      <ScrollView style={styles.scroll}><ListView dataSource={this.props.forecastData} renderRow={ForecastRow} style={styles.listView}/></ScrollView>
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
  listView: {
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5AC8FA',
    paddingRight: 20,
    marginTop: 1,
  },
  rightContainer: {
    flex: 1
  },
  scroll: {
    flex: 1
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff',
  }
});
