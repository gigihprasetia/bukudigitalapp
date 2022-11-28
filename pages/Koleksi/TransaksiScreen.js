import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardTransaksi from '../../components/CardTransaksi';

const TransaksiScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scroll}>
        <View>
          <CardTransaksi />
          <CardTransaksi />
          <CardTransaksi />
          <CardTransaksi />
          <CardTransaksi />
          <CardTransaksi />
          <CardTransaksi />
          <CardTransaksi />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 10,
  },
});
export default TransaksiScreen;
