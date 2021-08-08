import React, {Component} from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DateTime from '../components/DateTime';
import WeatherCard from '../components/WeatherCard';
import Geolocation from '@react-native-community/geolocation';
import {connect} from 'react-redux';
import {updateData} from '../module/Weather/action';
import Loader from '../components/Loader';

export class WeatherScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      forecast: [],
    };
  }
  componentDidMount() {
    // Get the user's location
    this.getLocation();
  }
  getLocation() {
    // Get the current position of the user
    Geolocation.getCurrentPosition(position => {
      this.props.updateData(
        position.coords.latitude,
        position.coords.longitude,
      );
    });
  }

  render() {
    if (this.props.DataReducer.isLoading === true) {
      return (
        <>
          <LinearGradient
            colors={['#171717', '#1a1741', '#8a273b']}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <DateTime
              timezone={this.props.DataReducer.data.timezone}
              lat={this.props.DataReducer.data.lat}
              lon={this.props.DataReducer.data.lon}
              current={this.props.DataReducer.data.current}
              currenTemp={this.props.DataReducer.data.current.temp}
            />
            <WeatherCard weatherData={this.props.DataReducer.data.daily} />
          </LinearGradient>
        </>
      );
    } else {
      return <Loader />;
    }
  }
}

const mapStateToProps = store => {
  const {DataReducer} = store;
  return {DataReducer};
};

const mapDispatchToProps = dispatch => ({
  updateData: (lat, lon) => dispatch(updateData(lat, lon)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
