import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeatherScreen from '../containers/WeatherScreen';
import errorPage from '../containers/errorPage';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const DataReducer = useSelector(state => state.DataReducer);
  if (DataReducer.error === '') {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="error" component={errorPage} />
      </Stack.Navigator>
    );
  }
};

export default RootNavigation;
