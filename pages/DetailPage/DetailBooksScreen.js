import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {green, orange} from '../../assets/utils';
import CardBook from '../../components/CardBook';

const DetailBooksScreen = ({route, navigation}) => {
  //   console.log(route.params);
  return (
    <SafeAreaView style={{padding: 10}}>
      <ScrollView>
        <View>
          <Image
            style={Style.cover}
            source={require('../../assets/images/coverbook1.jpg')}
          />
        </View>
        <Text style={Style.titleBook}>Your Book Cover By James</Text>
        <Text style={Style.author}>James Cahyadi</Text>
        <Text style={Style.Year}>2010</Text>
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
            <Text>84</Text>
            <Text>Halaman</Text>
          </View>
          <View style={Style.info}>
            <Text>54</Text>
            <Text>Terjual</Text>
          </View>
          <View style={Style.info}>
            <Text>8.5</Text>
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
            }}>
            <Text style={{color: 'white'}}>Rp 86.000</Text>
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
            Dalam belajar suatu bahasa asing apapun itu pasti kita menginginkan
            untuk mempelajarinya dengan secepat mungkin, dalam buku ini
            dijelaskan bagaimana penggunaan kalimat dalam berbahsa inggris yang
            digunakan dalam kehidupan sehari-hari.
          </Text>
        </View>
        <View
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
          }}>
          <Text>SMA / SMK</Text>
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
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
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
