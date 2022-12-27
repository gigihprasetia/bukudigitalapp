import React from 'react';
import Routing from './Routing/Routing';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from '@react-native-material/core';
import {Provider as StoreProvider} from 'react-redux';
import Stores from './redux/storeRedux';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StoreProvider store={Stores}>
        <Provider>
          <Routing />
        </Provider>
      </StoreProvider>
    </GestureHandlerRootView>
  );
};

export default App;
