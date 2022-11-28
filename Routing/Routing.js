import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthStack from '../pages/Auth/authStack';
import DashboardStack from '../pages/DashboardStack/DashboardStack';
import {useEffect} from 'react';
import {StackActions} from '@react-navigation/native';
import DetailBooksScreen from '../pages/DetailPage/DetailBooksScreen';
import LoginScreen from '../pages/Auth/LoginScreen';
const Stack = createNativeStackNavigator();

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('DashboardStack'));
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
          name="DetailBookScreen"
          component={DetailBooksScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="AuthStack"
          component={AuthStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
