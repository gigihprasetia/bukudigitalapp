import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {green} from '../assets/utils';

const SearchBar = ({valueText, onChangeSearch, clickSearch}) => {
  const [require, setRequire] = useState(false);
  return (
    <View
      style={{
        width: '90%',
        height: 45,
        borderWidth: 1,
        borderColor: green,
        marginVertical: 20,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TextInput
        style={{width: '80%', paddingLeft: 10}}
        placeholder={'Cari Tere Liye'}
        value={valueText}
        onChangeText={e => onChangeSearch(e)}
      />
      {require && (
        <Text style={{position: 'absolute', top: 45, color: 'red'}}>
          required
        </Text>
      )}
      <TouchableOpacity
        onPress={() => clickSearch(val => setRequire(val))}
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
