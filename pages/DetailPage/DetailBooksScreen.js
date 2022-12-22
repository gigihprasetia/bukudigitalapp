import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {green, orange} from '../../assets/utils';
import CardBook from '../../components/CardBook';
import ModalTransaksi from '../../components/Modal/ModalTransaksi';
import {getDetailBook} from '../../Function/getFunction';
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailBooksScreen = ({route, navigation}) => {
  const [isBuyModal, setIsBuyModal] = useState(false);
  const [detailBook, setDetailBook] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {idBook} = route.params;

  useEffect(() => {
    getDetailBook(idBook, res => {
      setDetailBook(res);
    });
  }, []);

  console.log(detailBook, 'ahai');
  return (
    <SafeAreaView style={{padding: 10}}>
      {isBuyModal && (
        <ModalTransaksi
          isPayment={() => navigation.navigate('Payment Manual')}
          isCencel={() => setIsBuyModal(false)}
        />
      )}
      {detailBook === null ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <ScrollView>
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
              <Text>{detailBook.total_page}</Text>
              <Text>Halaman</Text>
            </View>
            <View style={Style.info}>
              <Text>{detailBook.total_sell}</Text>
              <Text>Terjual</Text>
            </View>
            <View style={Style.info}>
              <Text>{detailBook.rate}</Text>
              <Text>Rating</Text>
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
            <Text style={{fontSize: 20}}>Sinopsi Buku</Text>
            <Text style={{fontSize: 15, marginTop: 10}}>
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
            {detailBook.categories.map(cate => (
              <View
                key={cate.name_key}
                style={{
                  borderWidth: 1,
                  borderColor: 'gray',
                  borderRadius: 10,
                  width: 100,
                  height: 30,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                  marginHorizontal: 12,
                }}>
                <Text>{cate.name}</Text>
              </View>
            ))}
          </View>
          <View style={{marginTop: 25}}>
            <Text
              style={{
                color: 'gray',
                fontSize: 20,
                borderBottomWidth: 2,
                borderBottomColor: 'gray',
              }}>
              Buku Dari James Cahyadi
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            style={{display: 'flex', flexDirection: 'row'}}>
            {[1, 2, 3, 4, 5].map(val => (
              <TouchableOpacity key={val}>
                <CardBook imageProp={require('../../assets/images/001.jpg')} />
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
  },
  cover: {
    width: 250,
    height: 300,
  },
  titleBook: {
    fontSize: 25,
    marginTop: 10,
  },
  author: {
    fontSize: 15,
    marginTop: 5,
    color: green,
  },
  Year: {
    fontSize: 15,
  },
  info: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

export default DetailBooksScreen;
