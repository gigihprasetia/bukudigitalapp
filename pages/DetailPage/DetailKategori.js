import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {green, textColor} from '../../assets/utils';
import CardBook from '../../components/CardBook';
import {getQueryBook} from '../../Function/getFunction';
import {normalize} from '../../Function/FontModule';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailKategori = props => {
  const {category} = props.route.params;
  // Keyword,Kategori
  const {type} = props.route.params;
  const [dataRes, setDataRes] = useState([]);
  const {navigation} = props;
  useEffect(() => {
    getQueryBook(type, category, res => setDataRes(res.data.data));
  }, [category]);
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: Dimensions.get('window').height,
        paddingBottom: 70,
      }}>
      <View>
        <View
          style={{
            width: Dimensions.get('window').width,
            backgroundColor: green,
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}>
          <Text style={{fontSize: normalize(15), color: 'white'}}>
            Hasil Pencarian Buku Dengan {type} "{category}"
          </Text>
        </View>
        {dataRes.length === 0 ? (
          <View
            style={{
              width: Dimensions.get('window').width,
              display: 'flex',
              alignItems: 'center',
              paddingVertical: 25,
            }}>
            <Material
              name="book-search-outline"
              size={normalize(25)}
              color={green}
            />
            <Text
              style={{
                fontSize: normalize(15),
                marginVertical: 10,
                color: textColor,
              }}>
              Hasil Pencarian Buku Tidak Ada
            </Text>
          </View>
        ) : (
          <FlatList
            numColumns={2}
            data={dataRes}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={item => item.id}
            renderItem={book => {
              return (
                <>
                  <CardBook
                    key={book.item.id}
                    title={book.item.title}
                    author={book.item.author}
                    price={book.item.price}
                    onPress={() =>
                      navigation.push('DetailBookScreen', {
                        idBook: book.item.id,
                      })
                    }
                  />
                </>
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  view1: {
    width: '100%',
    height: 60,
    borderLeftWidth: 5,
    borderLeftColor: green,
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  Layout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
});

export default DetailKategori;
