import {
  Dimensions,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CardTransaksi from '../../components/CardTransaksi';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getPdf, getTransaction} from '../../Function/getFunction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {normalize} from '../../Function/FontModule';
import {green} from '../../assets/utils';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {useIsFocused} from '@react-navigation/native';


const TransaksiScreen = props => {
  const {navigation} = props;
  const isLogin = useSelector(state => state.authRedux.isLogin);
  const [dataTransaction, setDataTransaction] = useState([]);
  const [isLoading, setIsloaading] = useState(true);
  const isFocus = useIsFocused();

  useEffect(() => {
    if (isLogin.status) {
      getTransaction(res => {
        setDataTransaction(res.data.data);
        setIsloaading(false);
      });
    } else {
      null;
    }
  }, [isLogin.status, isFocus]);

  const downloadHistory = async () => {
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let date = new Date();
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        //Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/Report_Download' +
          Math.floor(date.getTime() + date.getSeconds() / 2),
        description: 'Risk Report Download',
      },
    };
    config(options)
      .fetch('GET', url)
      .then(res => {
        //Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Report Downloaded Successfully.');
      });
  };

  const historyDownload = async () => {
    try {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'storage title',
          message: 'storage_permission',
        },
      ).then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          downloadHistory();
        } else {
          //If permission denied then show alert 'Storage Permission
          // Not Granted'
          Alert.alert('storage_permission');
        }
      });
    } catch (err) {
      //To handle permission related issue
      console.log('error', err);
    }
  };

  return (
    <SafeAreaView>
      {isLogin.status === false || dataTransaction.length === 0 ? (
        <View
          style={{
            width: '100%',
            height: Dimensions.get('window').height,
            alignItems: 'center',
            display: 'flex',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              marginTop: 30,
            }}>
            <Material name="cactus" size={30} color={green} />
            <Text
              style={{
                color: green,
                fontWeight: '500',
                fontSize: normalize(15),
              }}>
              {isLogin.status === false
                ? 'Login Untuk Melihat Riwayat Transakasi'
                : 'Belum Ada Riwayat Transaksi Buku'}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: green,
              width: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 30,
              borderRadius: 20,
            }}
            onPress={() => {
              isLogin.status
                ? navigation.navigate('Dashboard')
                : navigation.navigate('AuthStack');
            }}>
            <Text style={{color: 'white', fontSize: normalize(12)}}>
              {isLogin.status ? 'Cari Buku' : 'Login'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={dataTransaction}
          refreshControl={
            <RefreshControl
              colors={[green]}
              refreshing={isLoading}
              onRefresh={() => {
                getTransaction(res => {
                  setDataTransaction(res.data.data);
                  setIsloaading(false);
                });
              }}
            />
          }
          contentContainerStyle={{
            justifyContent: 'center',
            paddingHorizontal: Dimensions.get('window').width * 0.02,
            backgroundColor: 'white',
          }}
          keyExtractor={item => item.id}
          renderItem={transaction => {
            return (
              <CardTransaksi
                author={transaction.item.book_author}
                paymentDue={transaction.item.date_f}
                price={transaction.item.price_f}
                title={transaction.item.book_title}
                statusPembayaran={transaction.item.status}
                DownloadInvoice={() =>
                  getPdf(transaction.item.id, res => console.log(res))
                }
                bayarSekarang={() =>
                  navigation.push('Payment Manual', {data: transaction.item.id})
                }
              />
            );
          }}
        />
      )}

      {/* <ScrollView style={styles.scroll}>
        
        <View>
          <CardTransaksi />
          <CardTransaksi />
          <CardTransaksi />
          <CardTransaksi />
          <CardTransaksi />
          <CardTransaksi />
          <CardTransaksi />
          <CardTransaksi />
        </View>
      </ScrollView> */}

      {/* <FlatList
       
      /> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 10,
  },
});
export default TransaksiScreen;
