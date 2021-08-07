import React from 'react';
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native';
import moment from 'moment-timezone';
import FutureForecast from './FutureForecast';

const WeatherScroll = ({weatherData}) => {
  return (
    <View style={{flex: 3}}>
      <ScrollView style={styles.scrollView}>
        <CurrentTempEl
          data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
        />
        <FutureForecast data={weatherData} />
      </ScrollView>
    </View>
  );
};

const CurrentTempEl = ({data}) => {
  if (data && data.weather) {
    return (
      <View style={styles.currentTempContainer}>
        <Text style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
        <View>
          <Text style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
          <Text style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
    flex: 0.5,
  },
  image: {
    height: 20,
    width: 20,
  },
  currentTempContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#00000033',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    marginLeft: 10,
    marginBottom: 10,
  },
  day: {
    fontSize: 16,
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontWeight: '200',
    marginBottom: 15,
  },
  temp: {
    fontSize: 14,
    color: 'white',
    fontWeight: '100',
    textAlign: 'center',
  },
  otherContainer: {
    paddingRight: 40,
  },
});

export default WeatherScroll;
