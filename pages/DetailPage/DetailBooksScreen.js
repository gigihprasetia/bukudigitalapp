import React, {useEffect, useState} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {green, orange, textColor} from '../../assets/utils';
import CardBook from '../../components/CardBook';
import ModalTransaksi from '../../components/Modal/ModalTransaksi';
import {getDetailBook} from '../../Function/getFunction';
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {normalize} from '../../Function/FontModule';
import {API_URL} from '@env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailBooksScreen = ({route, navigation}) => {
  const [isBuyModal, setIsBuyModal] = useState(false);
  const [detailBook, setDetailBook] = useState(null);
  const [BookAuthor, setBookAuthor] = useState([]);
  const [isMessage, setIsMessage] = useState('');
  const {idBook} = route.params;

  useEffect(() => {
    getDetailBook(
      idBook,
      res => {
        setDetailBook(res);
      },
      res2 => setBookAuthor(res2),
    );
  }, []);

  const checkOutBook = async idBook => {
    try {
      const token = await AsyncStorage.getItem('Auth');

      const result = await axios.post(
        `${API_URL}/user-sys/book/buy-checkout`,
        {
          book_id: idBook,
          pay_method: 'manual_transfer',
          vendor: 'bni',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      // console.log(token, 'tokrn');
      // console.log(result.data.data, 'resultaaaaaaaaa');
      navigation.push('Payment Manual', {data: result.data.data});
    } catch (error) {
      // console.log(error.response.data.message, 'err');
      setIsMessage(error.response.data.message);
    }
  };
  return (
    <SafeAreaView style={{padding: 10}}>
      {isBuyModal && (
        <ModalTransaksi
          message={isMessage}
          isPayment={() => checkOutBook(detailBook.id)}
          isCencel={() => {
            setIsBuyModal(false);
            setIsMessage('');
          }}
        />
      )}
      {detailBook === null ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {detailBook.best_seller_week ? (
            <View style={Style.bestSeller}>
              <MaterialComunity
                name="star-box-multiple"
                color={'white'}
                size={20}
              />
              <Text style={Style.TextBestSeller}>Best Seller Of The Week</Text>
            </View>
          ) : null}

          <View>
            <Image
              style={Style.cover}
              source={require('../../assets/images/coverbook1.jpg')}
            />
          </View>
          <Text style={Style.titleBook}>{detailBook.title}</Text>
          <Text style={Style.author}>{detailBook.author}</Text>
          <Text style={Style.Year}>{detailBook.year}</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 30,
              width: '50%',
              justifyContent: 'space-between',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              paddingHorizontal: 5,
            }}>
            <View style={Style.info}>
              <Text style={{color: textColor}}>{detailBook.total_page}</Text>
              <Text style={{color: textColor}}>Halaman</Text>
            </View>
            <View style={Style.info}>
              <Text style={{color: textColor}}>{detailBook.total_sell}</Text>
              <Text style={{color: textColor}}>Terjual</Text>
            </View>
            <View style={Style.info}>
              <Text style={{color: textColor}}>{detailBook.rate}</Text>
              <Text style={{color: textColor}}>Rating</Text>
            </View>
          </View>
          <View
            style={{
              width: '80%',
              marginTop: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                width: 120,
                height: 40,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: green,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: green,
              }}
              onPress={() => setIsBuyModal(true)}>
              <Text style={{color: 'white'}}>Beli {detailBook.price_f}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 120,
                height: 40,
                borderWidth: 1,
                borderRadius: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: orange,
              }}>
              <Text style={{color: orange}}>Baca Sample</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: 'gray',
              marginTop: 20,
              borderRadius: 10,
              padding: 10,
            }}>
            <Text style={{fontSize: normalize(20), color: textColor}}>
              Sinopsi Buku
            </Text>
            <Text
              style={{
                fontSize: normalize(15),
                marginTop: 10,
                color: textColor,
              }}>
              {detailBook.synopsis}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {detailBook.categories.map(cate => {
              return (
                <View
                  key={cate.name_key}
                  style={{
                    borderWidth: 1,
                    borderColor: green,
                    borderRadius: 10,
                    width: 100,
                    height: 30,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    marginHorizontal: 12,
                  }}>
                  <Text style={{color: green, fontSize: normalize(12)}}>
                    {cate.name}
                  </Text>
                </View>
              );
            })}
          </View>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {detailBook.tags.map(tags => {
              return (
                <View
                  key={tags.name_key}
                  style={{
                    borderWidth: 1,
                    borderColor: orange,
                    borderRadius: 10,
                    width: 100,
                    height: 30,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    marginHorizontal: 12,
                  }}>
                  <Text style={{color: orange, fontSize: normalize(12)}}>
                    {' '}
                    # {tags.name}
                  </Text>
                </View>
              );
            })}
          </View>

          <View style={{marginTop: 25}}>
            <Text
              style={{
                color: textColor,
                fontSize: 20,
                borderBottomWidth: 2,
                borderBottomColor: 'gray',
              }}>
              Buku Dari {detailBook.author}
            </Text>
          </View>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{display: 'flex', flexDirection: 'row'}}>
            {BookAuthor.map(val => (
              <TouchableOpacity key={val.id}>
                <CardBook
                  onPress={() =>
                    navigation.replace('DetailBookScreen', {idBook: val.id})
                  }
                  imageProp={require('../../assets/images/001.jpg')}
                  title={val.title}
                  price={val.price_f}
                  author={val.author}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  bestSeller: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    backgroundColor: green,
    borderRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  TextBestSeller: {
    color: 'white',
    marginLeft: 10,
    fontSize: normalize(15),
  },
  cover: {
    width: 250,
    height: 300,
  },
  titleBook: {
    fontSize: RFPercentage(3),
    marginTop: 10,
    color: textColor,
  },
  author: {
    fontSize: normalize(15),
    marginTop: 5,
    color: green,
  },
  Year: {
    fontSize: normalize(15),
    color: textColor,
  },
  info: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    color: textColor,
    fontSize: normalize(15),
  },
});

export default DetailBooksScreen;
