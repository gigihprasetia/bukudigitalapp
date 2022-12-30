import React, {useEffect, useState} from 'react';

import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {green, textColor} from '../../assets/utils';
import {Formik} from 'formik';
import {ValidationLogin} from '../../components/Validation/ValidationRules';
import {loginFunction} from '../../Function/authFunction';
import {useDispatch} from 'react-redux';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView>
      <View style={Style.view}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={ValidationLogin}
          onSubmit={values =>
            loginFunction(values, async res => {
              try {
                await AsyncStorage.setItem('Auth', res.data.data);
                setMessage(null);
                dispatch({
                  type: 'auth',
                  data: {
                    status: true,
                    token: res.data.data,
                  },
                });
                navigation.navigate('Drawer', {screen: 'Koleksi Saya'});
              } catch (e) {
                console.log(e);
                setMessage(res.response.data.message);
              }
            })
          }>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => {
            return (
              <>
                <View style={Style.containInput}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                    }}>
                    <Text name={'email'} style={Style.label}>
                      Email
                    </Text>
                    {errors.email && (
                      <Text
                        style={{marginLeft: 10, fontSize: 10, color: 'red'}}>
                        *{errors.email}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    name={'password'}
                    style={Style.input}
                    onChangeText={handleChange('email')}
                    placeholder="yourname@gmail.com"
                  />
                </View>

                <View style={Style.containInput}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                    }}>
                    <Text style={Style.label}>Password</Text>
                    {errors.password && (
                      <Text
                        style={{marginLeft: 10, fontSize: 10, color: 'red'}}>
                        *{errors.password}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    name={'password'}
                    style={Style.input}
                    onChangeText={handleChange('password')}
                    placeholder="*******"
                    secureTextEntry={true}
                  />
                </View>
                {message != null && (
                  <Text style={{marginTop: 10, color: 'red'}}>*{message}</Text>
                )}
                <TouchableOpacity
                  style={{marginTop: 15, width: '90%'}}
                  onPress={
                    // console.log(navigation.navigate('Home'))
                    handleSubmit
                  }>
                  <View style={Style.btn}>
                    <Text style={{color: 'white'}}>Login</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginTop: 25,
                    width: '90%',
                    display: 'flex',
                    alignItems: 'center',
                    borderWidth: 1,
                    height: 40,
                    justifyContent: 'center',
                    borderRadius: 20,
                    borderColor: green,
                  }}>
                  <Text style={{color: green}}>Login With Google</Text>
                </TouchableOpacity>
              </>
            );
          }}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  view2: {
    width: 300,
    height: 400,
    backgroundColor: 'red',
  },
  input: {
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    color: textColor,
  },

  label: {
    paddingLeft: 3,
    marginBottom: 5,
  },
  containInput: {
    width: '90%',
    marginTop: 20,
  },
  btn: {
    height: 40,
    borderRadius: 20,
    width: '100%',
    backgroundColor: green,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
