import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {green} from '../../assets/utils';
import Swiper from '../../components/Swiper';
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import CardBook from '../../components/CardBook';
import SearchBar from '../../components/SearchBar';

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView
        style={{display: 'flex', alignItems: 'center', paddingVertical: 20}}>
        <SearchBar />
        <Swiper />
        <View style={Style.bestSeller}>
          <MaterialComunity
            name="star-box-multiple"
            color={'white'}
            size={20}
          />
          <Text style={Style.TextBestSeller}>Best Seller Of The Week</Text>
        </View>
        {/* CardBestSeller */}
        <View style={Style.Layout}>
          {[1, 2].map(book => (
            <View key={book}>
              <CardBook imageProp={require('../../assets/images/001.jpg')} />
            </View>
          ))}
        </View>
        {/* BUKU-BUKU BARU DI RAK */}
        <View style={Style.bestSeller}>
          <MaterialComunity
            name="book-open-variant"
            color={'white'}
            size={20}
          />
          <Text style={Style.TextBestSeller}>Buku-buku Baru Di Rak</Text>
        </View>
        {/* CardBuku2 di rak */}
        <View style={Style.Layout}>
          {[1, 2, 3, 4, 5, 6, 7].map(book => (
            <View key={book}>
              <CardBook
                imageProp={require('../../assets/images/coverbook1.jpg')}
              />
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const Style = StyleSheet.create({
  bestSeller: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    backgroundColor: green,
    borderRadius: 20,
    marginTop: 20,
  },
  TextBestSeller: {
    color: 'white',
    marginLeft: 10,
  },
  Layout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
  },
});

export default HomeScreen;
