import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import {Text, TouchableOpacity, View, Keyboard} from 'react-native';
import KategoriScreen from './KategoriScreen';
import {green} from '../../assets/utils';
const Tab = createBottomTabNavigator();

const DashboardStack = () => {
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
      screenOptions={{
        tabBarHideOnKeyboard: isTyping,
      }}
      tabBar={props =>
        isTyping ? null : (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                width: '100%',
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
      }
      initialRouteName="Home">
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerTitle: () => (
            <Text style={{fontSize: 20, color: green}}>Kategori</Text>
          ),
        }}
        name="Kategori"
        component={KategoriScreen}
      />
    </Tab.Navigator>
  );
};

export default DashboardStack;
