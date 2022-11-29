import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

const ModalTransaksi = ({isCencel, isPayment}) => {
  return (
    <View style={style.View}>
      <View style={style.background}></View>
      <View style={style.cardView}>
        <View>
          <Text>Bayar Pakai Apa</Text>
          <Text>Pilih metode pembayaran kesukaan kamu</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={isPayment}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              height: 40,
              borderRadius: 3,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              marginTop: 10,
            }}>
            <Material name="credit-card" />
            <Text style={{marginLeft: 5}}>Transfer Manual</Text>
          </TouchableOpacity>
        </View>
        <View style={{display: 'flex', alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => isCencel()}
            style={{
              borderWidth: 1,
              width: '30%',
              display: 'flex',
              alignItems: 'center',
              paddingVertical: 5,
              borderColor: 'red',
              borderRadius: 5,
            }}>
            <Text style={{color: 'red'}}>Cencel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  View: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  background: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.5,
  },
  cardView: {
    width: '80%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
  },
});
export default ModalTransaksi;
