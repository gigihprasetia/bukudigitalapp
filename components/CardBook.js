import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {green, textColor} from '../assets/utils';
import {getStringLimit} from '../Function/Function';
import {normalize} from '../Function/FontModule';

const CardBook = ({
  imageProp,
  title = 'Your Book Cover By James ',
  author = 'exampleAuthor',
  price = '1000',
  onPress,
}) => {
  return (
    <TouchableOpacity style={Style.ViewCard} onPress={onPress}>
      <Image
        style={Style.Img}
        source={{
          uri: 'https://www.gstatic.com/webp/gallery/1.webp',
        }}
      />
      <View style={Style.content}>
        <View>
          <Text
            style={{
              ...Style.txtContent,
              fontWeight: '800',
              fontSize: normalize(14),
              color: textColor,
            }}>
            {getStringLimit(title, 35)}
          </Text>
          <Text
            style={{
              ...Style.txtContent,
              fontSize: normalize(11),

              color: 'gray',
            }}>
            {getStringLimit(author, 90)}
          </Text>
        </View>
        <Text
          style={{
            ...Style.txtContent,
            fontSize: normalize(14),
            color: textColor,
            fontWeight: '500',
          }}>
          {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const Style = StyleSheet.create({
  ViewCard: {
    // flex: 1,
    // width: '41%',
    width: Dimensions.get('window').width * 0.4,
    // height: 300,
    // flexGrow: 1,
    // flexShrink: 1,
    padding: 3,
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    borderColor: 'gray',
    borderRadius: 10,
    margin: 13,
  },
  Img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    height: 90,
    marginTop: 5,
  },
  txtContent: {
    marginLeft: 2,
  },
});

export default CardBook;
