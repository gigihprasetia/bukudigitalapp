import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen name="RegiterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
