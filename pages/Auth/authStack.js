import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import {green} from '../../assets/utils';
import {Keyboard, Text, TouchableOpacity, View} from 'react-native';
import {set} from 'react-native-reanimated';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = () => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const open = Keyboard.addListener('keyboardDidShow', () =>
      setIsTyping(true),
    );
    const close = Keyboard.addListener('keyboardDidHide', () =>
      setIsTyping(false),
    );
    return () => {
      open.remove();
      close.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      tabBar={props => {
        return isTyping ? null : (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <View
              style={{
                width: '90%',
                height: 60,
                padding: 4,
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 30,
                justifyContent: 'space-around',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: green,
              }}>
              {props.state.routes.map((route, index) => {
                // console.log();
                const isFocus = props.state.index === index;
                // console.log(isTyping);

                return (
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                      });
                      if (!isFocus) {
                        props.navigation.navigate(route.name);
                      }
                      // alert(route.key)
                    }}
                    key={route.key}
                    style={{
                      backgroundColor: isFocus ? green : 'white',
                      width: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      borderRadius: 30,
                    }}>
                    <Text style={{color: isFocus ? 'white' : green}}>
                      {route.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        );
      }}
      initialRouteName="Login">
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <Text style={{fontSize: 20, color: green, fontWeight: '600'}}>
              Sign in ke Buku Digital-Ku
            </Text>
          ),
        }}
        name="Login"
        component={LoginScreen}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <Text style={{fontSize: 20, color: green, fontWeight: '600'}}>
              Sign Up ke Buku Digital-Ku
            </Text>
          ),
        }}
        name="Register"
        component={RegisterScreen}
      />
    </Tab.Navigator>
  );
};

export default AuthStack;
