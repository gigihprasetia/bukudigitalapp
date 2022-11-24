import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {green} from '../../assets/utils';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={Style.view}>
        <View style={Style.containInput}>
          <Text style={Style.label}>Email</Text>
          <TextInput style={Style.input} placeholder="yourname@gmail.com" />
        </View>
        <View style={Style.containInput}>
          <Text style={Style.label}>Password</Text>
          <TextInput
            style={Style.input}
            placeholder="password"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={{marginTop: 25, width: '90%'}}>
          <View style={Style.btn}>
            <Text style={{color: 'white'}}>Login</Text>
          </View>
        </TouchableOpacity>
        <Text style={{marginTop: 10}}>sudah punya akun? Daftar</Text>
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
