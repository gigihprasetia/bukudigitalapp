import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const CardBook = ({imageProp}) => {
  return (
    <View style={Style.ViewCard}>
      <Image style={Style.Img} source={imageProp} />
      <View style={Style.content}>
        <Text style={{...Style.txtContent, fontWeight: '600', fontSize: 15}}>
          {'Your Book Cover By James '.length >= 30
            ? 'Your Book Cover By James '.slice(0, 30) + '...'
            : 'Your Book Cover By James '}
        </Text>
        <Text style={{...Style.txtContent, fontSize: 12, marginTop: 10}}>
          CardBook
        </Text>
        <Text style={{...Style.txtContent, fontSize: 14, marginTop: 5}}>
          Rp 86.000
        </Text>
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  ViewCard: {
    width: 150,
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
