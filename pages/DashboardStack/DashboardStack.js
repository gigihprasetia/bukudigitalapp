import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import KoleksiSayaScreen from './KoleksiSayaScreen';
import {Text, TouchableOpacity, View, Dimensions} from 'react-native';
import AuthStack from '../Auth/authStack';
import LoginScreen from '../Auth/LoginScreen';
import KategoriScreen from './KategoriScreen';
import Feather from 'react-native-vector-icons/Feather';
import {green} from '../../assets/utils';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('window');
const DashboardStack = () => {
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
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                marginBottom: 5,
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
                      width: '33%',
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
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;
      //     if (route.name === 'Home') {
      //       iconName = 'home';
      //     } else if (route.name === 'Kategori') {
      //       iconName = 'grid';
      //     } else if (route.name === 'Koleksi Saya') {
      //       iconName = 'folder';
      //     }

      //     return <Feather name={iconName} size={size} color={color} />;
      //   },
      //   tabBarActiveTintColor: green,
      //   tabBarInactiveTintColor: 'gray',
      // })}
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
      <Tab.Screen
        options={{
          headerShown: true,
          header: ({navigation}) => (
            <View
              style={{
                width: '100%',
                height: 60,
                backgroundColor: 'white',
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                paddingHorizontal: 10,
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 20, color: green}}>Koleksi Saya</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('AuthStack')}>
                <Icon color={green} name="ios-person-circle" size={25} />
              </TouchableOpacity>
            </View>
          ),
        }}
        name="Koleksi Saya"
        component={KoleksiSayaScreen}
      />
    </Tab.Navigator>
  );
};

export default DashboardStack;
