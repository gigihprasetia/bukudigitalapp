import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {green} from '../../assets/utils';

const KoleksiSayaScreen = ({navigation}) => {
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
            // borderWidth: 1,
            // borderColor: green,
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
