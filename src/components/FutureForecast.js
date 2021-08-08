import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import moment from 'moment-timezone';

const FutureForecast = ({data}) => {
  return (
    <View>
      {data && data.length > 0 ? (
        data.map(
          (data, idx) =>
            idx !== 0 && <FutureForecastItem key={idx} forecastItem={data} />,
        )
      ) : (
        <View />
      )}
    </View>
  );
};

const FutureForecastItem = ({forecastItem}) => {
  const icon = forecastItem.weather[0].icon;
  return (
    <View style={styles.futureForecastItemContainer}>
      <Image source={{uri: `http://openweathermap.org/img/w/${icon}.png`}} />
      <Text style={styles.day}>
        {moment(forecastItem.dt * 1000).format('ddd')}
      </Text>
      <View>
        <Text style={styles.temp}>
          Night - {forecastItem.temp.night}&#176;C
        </Text>
        <Text style={styles.temp}> Day - {forecastItem.temp.day}&#176;C</Text>
      </View>
    </View>
  );
};

export default FutureForecast;

const styles = StyleSheet.create({
  futureForecastItemContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
  image: {
    width: 30,
    height: 30,
  },
});
