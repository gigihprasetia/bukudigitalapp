import React from 'react';
import Routing from './Routing/Routing';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Routing />
    </GestureHandlerRootView>
  );
};

export default App;
