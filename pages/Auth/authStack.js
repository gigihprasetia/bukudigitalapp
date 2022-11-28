import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import {green} from '../../assets/utils';
import {Text, TouchableOpacity, View} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = () => {
  return (
    <Tab.Navigator
      tabBar={
        props => (
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
        )
        // console.log(props.descriptors.options);
      }
      // screenOptions={({route}) => ({
      //   tabBarStyle: {
      //     borderRadius: 20,
      //     backgroundColor: 'white',
      //     position: 'absolute',
      //   },
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;
      //     if (route.name === 'Login') {
      //       iconName = 'login';
      //     } else if (route.name === 'Register') {
      //       iconName = 'account-plus';
      //     }

      //     return <Icon name={iconName} size={size} color={color} />;
      //   },
      //   tabBarActiveTintColor: green,
      //   tabBarInactiveTintColor: 'gray',
      // })}
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
