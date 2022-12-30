import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {green, orange} from '../assets/utils';
import {normalize} from '../Function/FontModule';

const CardTransaksi = ({
  statusPembayaran,
  paymentDue,
  author,
  title,
  price,
  bayarSekarang,
  DownloadInvoice,
}) => {
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
            paddingHorizontal: 15,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: orange, fontSize: normalize(12)}}>
            {statusPembayaran}
          </Text>
        </View>
        <Text style={{fontSize: normalize(14)}}>{paymentDue}</Text>
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
              fontSize: normalize(15),
              fontWeight: '500',
              width: 240,
            }}>
            {title}
          </Text>
          <Text>{author}</Text>
        </View>
        <View>
          <Text style={{fontSize: normalize(12)}}>Total Harga</Text>
          <Text style={{fontSize: normalize(17), fontWeight: '500'}}>
            {price}
          </Text>
        </View>
      </View>
      {statusPembayaran != 'EXPIRED' && (
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
            onPress={DownloadInvoice}
            style={{
              height: '50%',
              display: 'flex',
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}>
            <Text style={{color: 'gray', fontSize: normalize(12)}}>
              Download Invoice
            </Text>
          </TouchableOpacity>
          {statusPembayaran != 'WAIT_CONFIRM' && (
            <TouchableOpacity
              onPress={bayarSekarang}
              style={{
                height: '50%',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: green,
                marginHorizontal: 10,
                paddingHorizontal: 10,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontSize: normalize(12)}}>
                Bayar Sekarang
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
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
