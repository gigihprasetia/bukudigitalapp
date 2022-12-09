import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {green} from '../../assets/utils';
import Swiper from '../../components/Swiper';
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import CardBook from '../../components/CardBook';
import SearchBar from '../../components/SearchBar';
import {getBook} from '../../Function/getFunction';
import {useIsFocused} from '@react-navigation/native';
const HomeScreen = ({navigation}) => {
  const [dataBook, setDataBook] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    getBook(res => setDataBook(res));
    // console.log('asu');
  }, [isFocused]);
  console.log(dataBook);
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <SafeAreaView
        style={{display: 'flex', alignItems: 'center', paddingVertical: 10}}>
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
          {/* {[1, 2].map(book => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailBookScreen', {key: book})
              }
              key={book}>
              <CardBook imageProp={require('../../assets/images/001.jpg')} />
            </TouchableOpacity>
          ))} */}
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
          {dataBook.map(book => (
            <TouchableOpacity key={book.id}>
              <CardBook
                // imageProp={
                //   'https://global.jagoanstorage.com/s3-storage.bukudigitalku.com/public/book/1ecb83f4-1fdd-4d4f-8060-c2689e3c7e5d/6361ddaddda1b.webp'
                // }
                title={book.title}
                author={book.author}
              />
            </TouchableOpacity>
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
