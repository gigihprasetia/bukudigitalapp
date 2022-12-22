import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {green} from '../assets/utils';
import {getStringLimit} from '../Function/Function';

const CardBook = ({
  imageProp,
  title = 'Your Book Cover By James ',
  author = 'exampleAuthor',
  price = '1000',
}) => {
  return (
    <View style={Style.ViewCard}>
      <Image
        style={Style.Img}
        source={{
          uri: 'https://www.gstatic.com/webp/gallery/1.webp',
        }}
      />
      <View style={Style.content}>
        <Text style={{...Style.txtContent, fontWeight: '600', fontSize: 15}}>
          {getStringLimit(title, 35)}
        </Text>
        <Text style={{...Style.txtContent, fontSize: 12, marginTop: 10}}>
          {getStringLimit(author, 100)}
        </Text>
        <Text style={{...Style.txtContent, fontSize: 14, marginTop: 5}}>
          {price}
        </Text>
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  ViewCard: {
    width: 150,
    height: 300,
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    borderColor: 'gray',
    borderRadius: 10,
    margin: 13,
  },
  Img: {
    width: 140,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
  },
  txtContent: {
    marginLeft: 2,
  },
});

export default CardBook;
