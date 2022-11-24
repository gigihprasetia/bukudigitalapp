import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {green} from '../assets/utils';

const SearchBar = () => {
  return (
    <View
      style={{
        width: '90%',
        height: 45,
        borderWidth: 1,
        borderColor: green,
        marginVertical: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
      }}>
      <TextInput
        style={{width: '80%', paddingLeft: 10}}
        placeholder={'Cari Tere Liye'}
      />
      <TouchableOpacity
        style={{
          width: '20%',
          height: '100%',
          borderLeftWidth: 1,
          borderColor: green,
          borderTopRightRadius: 6,
          borderBottomRightRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: green, fontWeight: '700'}}>Cari</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
