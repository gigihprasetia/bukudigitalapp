import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {green} from '../../assets/utils';
import KoleksiSayaScreen from './KoleksiSayaScreen';
import TransaksiScreen from './TransaksiScreen';

const Tab = createBottomTabNavigator();
const KoleksiStack = () => {
  return (
    <Tab.Navigator
      tabBar={props => (
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
      )}>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        initialParams={{message: 'coolection'}}
        name="Koleksi Buku"
        component={KoleksiSayaScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Transaksi"
        component={TransaksiScreen}
      />
    </Tab.Navigator>
  );
};

export default KoleksiStack;
