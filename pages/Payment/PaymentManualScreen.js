import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {blue, green, orange} from '../../assets/utils';

const PaymentManualScreen = () => {
  return (
    <ScrollView>
      <View style={style.view}>
        <Material color={green} name="grass" size={30} />
        <Text style={{color: green}}>Menunggu Pembayaran</Text>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            borderWidth: 1,
            borderStyle: 'dashed',
            height: 100,
            marginTop: 20,
            borderColor: green,
          }}>
          <Text style={{color: green, fontSize: 10}}>Transfer Manual</Text>
          <Text style={{color: green, fontSize: 18}}>Rp 84.000</Text>
        </View>
        <View
          style={{
            display: 'flex',
            width: '80%',
            marginBottom: 50,
          }}>
          <Text>Paymed due date 2022-11-29 11:41:23</Text>
        </View>
        {/* UPLOAD BUKTI PEMBAYARAN */}

        <Text style={{color: 'gray'}}>Transfer Ke</Text>
        <Text style={{color: blue, fontSize: 23}}>1370018732830</Text>
        <Text style={{color: green}}>A.N. PT. Omah Teknologi Indonesia</Text>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
            borderWidth: 1,
            borderStyle: 'dashed',
            height: 300,
            marginTop: 20,
            borderColor: 'gray',
          }}>
          <Text style={{color: 'gray'}}>Picture</Text>
        </View>
        <View
          style={{
            width: '80%',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              width: 100,
              height: 30,
              borderColor: green,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 5,
            }}>
            <Text style={{color: green}}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 30,
              borderColor: orange,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 5,
              marginLeft: 10,
            }}>
            <Text style={{color: orange}}>Files</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default PaymentManualScreen;
