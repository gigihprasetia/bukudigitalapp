import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import KoleksiSayaScreen from './KoleksiSayaScreen';
import {Text, View} from 'react-native';
import AuthStack from '../Auth/authStack';
import LoginScreen from '../Auth/LoginScreen';
import KategoriScreen from './KategoriScreen';
import Feather from 'react-native-vector-icons/Feather';
import {green} from '../../assets/utils';
const Tab = createBottomTabNavigator();

const DashboardStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Kategori') {
            iconName = 'grid';
          } else if (route.name === 'Koleksi Saya') {
            iconName = 'folder';
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: green,
        tabBarInactiveTintColor: 'gray',
      })}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen name="Kategori" component={KategoriScreen} />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Koleksi Saya"
        component={KoleksiSayaScreen}
      />
    </Tab.Navigator>
  );
};

export default DashboardStack;
