import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {green, orange} from '../assets/utils';

const CardTransaksi = () => {
  return (
    <View style={styles.card}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          paddingVertical: 5,
          borderBottomColor: 'gray',
          height: '20%',
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: orange,
            width: 180,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: orange}}>Menunggu Pembayaran</Text>
        </View>
        <Text>28 November 2022</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          height: '40%',
        }}>
        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '500',
              width: 240,
            }}>
            {'Belajar Cepat Bahasa Inggris '.length > 40
              ? 'Belajar Cepat Bahasa Inggris '.slice(0, 40) + '...'
              : 'Belajar Cepat Bahasa Inggris '}
          </Text>
          <Text>Arif Isnaini</Text>
        </View>
        <View>
          <Text>Total Harga</Text>
          <Text style={{fontSize: 17, fontWeight: '500'}}>Rp 84.000</Text>
        </View>
      </View>
      <View
        style={{
          height: '40%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: '50%',
            display: 'flex',
            justifyContent: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
          }}>
          <Text style={{color: 'gray'}}>Download Invoice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '50%',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: green,
            marginHorizontal: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}>
          <Text style={{color: 'white'}}>Bayar Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: green,
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default CardTransaksi;
