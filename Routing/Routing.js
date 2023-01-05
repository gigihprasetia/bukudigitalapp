import React, {useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthStack from '../pages/Auth/authStack';
import DashboardStack from '../pages/DashboardStack/DashboardStack';
import {useEffect} from 'react';
import {StackActions} from '@react-navigation/native';
import DetailBooksScreen from '../pages/DetailPage/DetailBooksScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {green} from '../assets/utils';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import KoleksiStack from '../pages/Koleksi/KoleksiStack';
import PaymentManualScreen from '../pages/Payment/PaymentManualScreen';
import DetailKategori from '../pages/DetailPage/DetailKategori';
import HomeScreen from '../pages/DashboardStack/HomeScreen';
import {useSelector, useDispatch} from 'react-redux';
import {onSignin} from '../Function/authFunction';
import {GoogleSignin} from 'react-native-google-signin';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Drawer'));
    }, 3000);
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 130, height: 80}}
          source={require('../assets/images/buku.png')}
        />
      </View>
    </SafeAreaView>
  );
};

function MyDrawer() {
  const isLogin = useSelector(state => state.authRedux.isLogin);
  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        drawerType: 'front',
        drawerActiveTintColor: green,
        headerTintColor: green,
      }}
      drawerContent={props => {
        return (
          <View>
            <View
              style={{
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
              }}>
              <Image source={require('../assets/images/buku.png')} />
            </View>
            {props.state.routes.map((val, index) => {
              return (
                <TouchableOpacity
                  key={val.key}
                  onPress={async () => {
                    if (val.name === 'Logout') {
                      dispatch({
                        type: 'auth',
                        data: {
                          status: false,
                          token: '',
                        },
                      });
                      await AsyncStorage.removeItem('Auth');
                      onSignin(async () => {
                        try {
                          await GoogleSignin.signOut();
                          dispatch({
                            type: 'auth',
                            data: {
                              status: false,
                              token: '',
                            },
                          });
                          await AsyncStorage.removeItem('Auth');
                        } catch (error) {
                          console.error(error);
                        }
                      });
                    } else {
                      props.navigation.navigate(val.name);
                    }
                    // console.log(val.name);
                  }}
                  style={{
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor:
                      props.state.index === index ? green : 'white',
                  }}>
                  <MaterialIcon
                    name={
                      val.name === 'Dashboard'
                        ? 'view-dashboard'
                        : val.name === 'Koleksi Saya'
                        ? 'book-outline'
                        : val.name === 'Account'
                        ? 'account'
                        : 'logout'
                    }
                    size={20}
                    color={props.state.index === index ? 'white' : green}
                  />
                  <Text
                    style={{
                      color: props.state.index === index ? 'white' : green,
                      marginLeft: 10,
                    }}>
                    {val.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }}>
      <Drawer.Screen
        options={{
          headerTitle: () => undefined,
          headerRight: () => (
            <Image
              style={{width: 50, height: 30, marginRight: 20}}
              source={require('../assets/images/buku.png')}
            />
          ),
        }}
        name="Dashboard"
        component={DashboardStack}
      />

      <Drawer.Screen
        options={{
          headerTitle: () => undefined,
          headerRight: () => (
            <Image
              style={{width: 50, height: 30, marginRight: 20}}
              source={require('../assets/images/buku.png')}
            />
          ),
        }}
        name="Koleksi Saya"
        component={KoleksiStack}
      />

      <Drawer.Screen
        options={{
          headerTitle: () => undefined,
          headerRight: () => (
            <Image
              style={{width: 50, height: 30, marginRight: 20}}
              source={require('../assets/images/buku.png')}
            />
          ),
        }}
        name={isLogin.status ? 'Logout' : 'Account'}
        component={AuthStack}
      />
    </Drawer.Navigator>
  );
}

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={SplashScreen}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="DashboardStack"
          component={DashboardStack}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Drawer"
          component={MyDrawer}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="DetailBookScreen"
          component={DetailBooksScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Detail Kategori"
          component={DetailKategori}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="AuthStack"
          component={AuthStack}
        />
        <Stack.Screen
          options={{
            headerTitle: () => (
              <Text style={{color: green, fontSize: 15}}>Payment Manual</Text>
            ),
            headerTintColor: green,
          }}
          name="Payment Manual"
          component={PaymentManualScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
