import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {green} from '../../assets/utils';
const RegisterScreen = () => {
  return (
    <SafeAreaView>
      <View style={Style.view}>
        {/* <View style={{width: '90%'}}>
          <Text style={{fontSize: 20, color: green, fontWeight: '500'}}>
            Sign In Ke Buku Digital-Ku
          </Text>
        </View> */}
        <View style={Style.containInput}>
          <Text style={Style.label}>Name</Text>
          <TextInput style={Style.input} placeholder="yourname" />
        </View>
        <View style={Style.containInput}>
          <Text style={Style.label}>Email</Text>
          <TextInput style={Style.input} placeholder="yourname@gmail.com" />
        </View>
        <View style={Style.containInput}>
          <Text style={Style.label}>Password</Text>
          <TextInput
            style={Style.input}
            placeholder="*******"
            secureTextEntry={true}
          />
        </View>
        <View style={Style.containInput}>
          <Text style={Style.label}>Re-Password</Text>
          <TextInput
            style={Style.input}
            placeholder="*******"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={{marginTop: 25, width: '90%'}}>
          <View style={Style.btn}>
            <Text style={{color: 'white'}}>Register Account</Text>
          </View>
        </TouchableOpacity>
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
