import React, {useState} from 'react';
import {Formik} from 'formik';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {green} from '../../assets/utils';
import ModalRegister from '../../components/Modal/ModalRegister';
import {registerFunction} from '../../Function/authFunction';
import {ValidationRegister} from '../../components/Validation/ValidationRules';
import {Button} from '@react-native-material/core';
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';

const RegisterScreen = ({navigation}) => {
  const [registerPost, setRegisterPost] = useState({
    data: null,
    openModal: false,
  });
  console.log(registerPost, 'statusnya');
  return (
    <SafeAreaView>
      <View style={Style.view}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            password1: '',
          }}
          validationSchema={ValidationRegister}
          onSubmit={values =>
            registerFunction(values, res => {
              if (res.status === 200) {
                setRegisterPost({data: res.data.data, openModal: true});
              } else {
                setRegisterPost({data: res.response.data, openModal: false});
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
                    <Text style={Style.label}>Name</Text>
                    {errors.name && (
                      <Text
                        style={{marginLeft: 10, fontSize: 10, color: 'red'}}>
                        *{errors.name}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    name={'name'}
                    style={Style.input}
                    placeholder="yourname"
                    onChangeText={handleChange('name')}
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

                <View style={Style.containInput}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                    }}>
                    <Text style={Style.label}>Re-Password</Text>
                    {errors.password1 && (
                      <Text
                        style={{marginLeft: 10, fontSize: 10, color: 'red'}}>
                        *{errors.password1}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={Style.input}
                    placeholder="*******"
                    secureTextEntry={true}
                    name={'password1'}
                    onChangeText={handleChange('password1')}
                  />
                </View>

                {registerPost.data != null &&
                  registerPost.openModal === false && (
                    <Text style={{marginTop: 20, color: 'red'}}>
                      *{registerPost.data.message}
                    </Text>
                  )}

                <ModalRegister
                  Children={() => (
                    <TouchableOpacity
                      style={{marginTop: 25, width: '90%'}}
                      onPress={handleSubmit}>
                      <View style={Style.btn}>
                        <Text style={{color: 'white'}}>Register Account</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  ActionTemplate={() => (
                    <TouchableOpacity
                      onPress={() => {
                        setRegisterPost({
                          data: null,
                          openModal: false,
                        });
                        navigation.navigate('Login');
                      }}
                      style={{
                        display: 'flex',
                        width: '50%',
                        justifyContent: 'center',
                        paddingVertical: 5,
                        alignItems: 'center',
                        backgroundColor: green,
                        borderRadius: 20,
                      }}>
                      <Text style={{color: 'white'}}>Go To Login</Text>
                    </TouchableOpacity>
                  )}
                  navigation={navigation}
                  visible={registerPost.openModal}
                />
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
  },

  label: {
    paddingLeft: 3,
    marginBottom: 5,
  },
  containInput: {
    width: '90%',
    marginTop: 10,
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

export default RegisterScreen;
