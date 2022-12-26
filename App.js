import React from 'react';
import Routing from './Routing/Routing';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider as Material} from '@react-native-material/core';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
const App = () => {
  console.log(Provider);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={Store}>
        <Material>
          <Routing />
        </Material>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
