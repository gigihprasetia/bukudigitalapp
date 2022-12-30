import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  RefreshControl,
  Dimensions,
  TextInput,
} from 'react-native';
import {green} from '../../assets/utils';
import Swiper from '../../components/Swiper';
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import CardBook from '../../components/CardBook';
import SearchBar from '../../components/SearchBar';
import {getBestSeller, getBook} from '../../Function/getFunction';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const WidthScreen = Dimensions.get('window').width;
  const HeightScreen = Dimensions.get('window').height;
  const query = useSelector(state => state.QueryState.isTyping);
  const [dataBook, setDataBook] = useState([]);
  const [dataBestSeller, setDataBestSeller] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [querySearch, setQuerySearch] = useState('');
  const isFocused = useIsFocused();
  useEffect(() => {
    getBook((res, isLoading) => {
      setDataBook(res);
      setRefresh(isLoading);
    });
    getBestSeller(res => {
      setDataBestSeller(res.data.data);
    });
  }, []);

  return (
    <View
      style={{backgroundColor: 'white', width: '100%', alignItems: 'center'}}>
      <SearchBar
        onChangeSearch={e => setQuerySearch(e)}
        valueText={querySearch}
        clickSearch={require => {
          if (querySearch.length === 0) {
            require(true);
          } else {
            navigation.navigate('Detail Kategori', {
              category: querySearch,
              type: 'keyword',
            });
            require(false);
            setQuerySearch('');
          }
        }}
      />
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{paddingBottom: 50}}
        data={dataBook}
        ListHeaderComponent={() => (
          <View>
            <Swiper />
            <FlatList
              numColumns={2}
              data={dataBestSeller}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              renderItem={book => {
                return (
                  <CardBook
                    key={book.item.book_id}
                    title={book.item.book_title}
                    author={book.item.book_author}
                    price={book.item.book_price}
                    onPress={() =>
                      navigation.push('DetailBookScreen', {
                        idBook: book.item.book_id,
                      })
                    }
                  />
                );
              }}
              keyExtractor={item => item.book_id}
            />
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={Style.bestSeller}>
                <MaterialComunity
                  name="book-open-variant"
                  color={'white'}
                  size={20}
                />
                <Text style={Style.TextBestSeller}>Buku-buku Baru Di Rak</Text>
              </View>
            </View>
          </View>
        )}
        renderItem={book => {
          return (
            <CardBook
              key={book.item.id}
              title={book.item.title}
              author={book.item.author}
              price={book.item.price}
              onPress={() =>
                navigation.push('DetailBookScreen', {idBook: book.item.id})
              }
            />
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
  // return (
  //   <ScrollView
  //     // refreshControl={e => console.log(e)}
  //     style={{backgroundColor: 'white'}}
  //     refreshControl={
  //       <RefreshControl
  //         colors={[`${green}`]}
  //         refreshing={refresh}
  //         onRefresh={() => {
  //           getBook((res, isLoading) => {
  //             setDataBook(res);
  //             setRefresh(isLoading);
  //           });
  //           getBestSeller(res => {
  //             setDataBestSeller(res.data.data);
  //           });
  //         }}
  //       />
  //     }>
  //     <SafeAreaView
  //       style={{display: 'flex', alignItems: 'center', paddingVertical: 10}}>
  //       <SearchBar
  //         valueText={querySearch}
  //         onChangeSearch={e => setQuerySearch(e)}
  //         clickSearch={require => {
  //           if (querySearch.length === 0) {
  //             require(true);
  //           } else {
  //             navigation.navigate('Detail Kategori', {
  //               category: querySearch,
  //               type: 'keyword',
  //             });
  //             require(false);
  //             setQuerySearch('');
  //           }
  //         }}
  //       />
  //       <Swiper />
  //       <View style={Style.bestSeller}>
  //         <MaterialComunity
  //           name="star-box-multiple"
  //           color={'white'}
  //           size={20}
  //         />
  //         <Text style={Style.TextBestSeller}>Best Seller Of The Week</Text>
  //       </View>
  //       {/* CardBestSeller */}
  //       {/* <View style={Style.Layout}>
  //         {dataBestSeller.map(best => (
  //           <TouchableOpacity
  //             key={best.book_id}
  //             onPress={() =>
  //               navigation.push('DetailBookScreen', {idBook: best.book_id})
  //             }>
  //             <CardBook
  //               title={best.book_title}
  //               author={best.book_author}
  //               price={best.book_price}
  //             />
  //           </TouchableOpacity>
  //         ))}
  //       </View> */}
  //       <View style={Style.Layout}>
  //         <FlatList
  //           numColumns={2}
  //           data={dataBestSeller}
  //           renderItem={book => {
  //             return (
  //               <CardBook
  //                 key={book.item.id}
  //                 title={book.item.title}
  //                 author={book.item.author}
  //                 price={book.item.price}
  //                 onPress={() =>
  //                   navigation.push('DetailBookScreen', {idBook: book.item.id})
  //                 }
  //               />
  //             );
  //           }}
  //           keyExtractor={item => item.id}
  //         />
  //       </View>
  //       {/* BUKU-BUKU BARU DI RAK */}
  //       <View style={Style.bestSeller}>
  //         <MaterialComunity
  //           name="book-open-variant"
  //           color={'white'}
  //           size={20}
  //         />
  //         <Text style={Style.TextBestSeller}>Buku-buku Baru Di Rak</Text>
  //       </View>
  //       {/* CardBuku2 di rak */}
  //       <View style={Style.Layout}>
  //         <FlatList
  //           numColumns={2}
  //           data={dataBook}
  //           renderItem={book => {
  //             return (
  //               <CardBook
  //                 key={book.item.id}
  //                 title={book.item.title}
  //                 author={book.item.author}
  //                 price={book.item.price}
  //                 onPress={() =>
  //                   navigation.push('DetailBookScreen', {idBook: book.item.id})
  //                 }
  //               />
  //             );
  //           }}
  //           keyExtractor={item => item.id}
  //         />
  //       </View>
  //     </SafeAreaView>
  //   </ScrollView>
  // );
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
  },
  TextBestSeller: {
    color: 'white',
    marginLeft: 10,
  },
  Layout: {
    flex: 1,
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // width: '90%',
  },
});

export default HomeScreen;
