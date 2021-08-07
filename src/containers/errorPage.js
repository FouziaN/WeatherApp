import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {connect} from 'react-redux';
import {updateData} from '../module/Weather/action';

export class errorPage extends Component {
  constructor(props) {
    super(props);
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
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Something Went Wrong at Our End</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.getLocation()}>
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = store => {
  const {DataReducer} = store;
  return {DataReducer};
};

const mapDispatchToProps = dispatch => ({
  updateData: (lat, lon) => dispatch(updateData(lat, lon)),
});

export default connect(mapStateToProps, mapDispatchToProps)(errorPage);

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  errorText: {
    fontWeight: '700',
    fontSize: 40,
    textAlign: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: 'blue',
    padding: 10,
    width: '25%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {fontSize: 16, fontWeight: '500', color: 'blue'},
});
