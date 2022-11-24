import React from 'react';
import {Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Routing from './Routing/Routing';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    // <GestureHandlerRootView>
    <Routing />
    // </GestureHandlerRootView>
  );
};

export default App;
