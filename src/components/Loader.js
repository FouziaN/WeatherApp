import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {View} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/loader.gif')}
        resizeMode="cover"
      />
    </View>
  );
};
export default Loader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {height: '100%', width: '100%', margin: 30},
});
