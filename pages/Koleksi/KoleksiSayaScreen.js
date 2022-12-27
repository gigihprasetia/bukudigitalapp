import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {green} from '../../assets/utils';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from '@react-native-material/core';
import {useDispatch} from 'react-redux';

const KoleksiSayaScreen = props => {
  const {navigation} = props;
  const isFocus = useIsFocused();
  const dispatch = useDispatch();
  useEffect(() => {
    const storeData = async value => {
      try {
        const result = await AsyncStorage.getItem('Auth');

        console.log(result);
      } catch (e) {
        console.log(e);
      }
    };
    storeData();
  }, [isFocus]);

  return (
    <SafeAreaView>
      <ScrollView
        style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
        <View
          style={{
            width: '100%',
            height: 130,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            marginTop: 20,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Material name="cactus" size={30} color={green} />
            <Text style={{color: green, fontWeight: '500'}}>
              Belum Ada Koleksi Buku
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: green,
              width: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 30,
              borderRadius: 20,
            }}
            onPress={() => navigation.navigate('Dashboard')}>
            <Text style={{color: 'white'}}>Cari Buku</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KoleksiSayaScreen;
