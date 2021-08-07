import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import RootNavigation from './src/navigator/RootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/reducer/store';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
