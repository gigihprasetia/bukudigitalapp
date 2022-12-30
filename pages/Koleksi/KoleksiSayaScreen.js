import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {normalize} from '../../Function/FontModule';
import {getCollectionBook} from '../../Function/getFunction';

const KoleksiSayaScreen = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.authRedux.isLogin);
  const [dataCol, setDataCol] = useState([]);

  useEffect(() => {
    if (isLogin.status === true) {
      getCollectionBook(res => setDataCol(res.data.data));
    } else {
      null;
    }
  }, [isLogin.status]);

  return (
    <SafeAreaView>
      <ScrollView
        style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
        {isLogin.status === false || dataCol.length === 0 ? (
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
              onPress={() => {
                isLogin.status
                  ? navigation.navigate('Dashboard')
                  : navigation.navigate('AuthStack');
              }}>
              <Text style={{color: 'white', fontSize: normalize(12)}}>
                {isLogin.status ? 'Cari Buku' : 'Login'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text>ada data</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default KoleksiSayaScreen;
