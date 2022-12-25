import React from 'react';
import Routing from './Routing/Routing';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from '@react-native-material/core';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider>
        <Routing />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
