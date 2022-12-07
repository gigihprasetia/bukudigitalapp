import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {green} from '../../assets/utils';
import CardBook from '../../components/CardBook';

const DetailKategori = props => {
  const {category} = props.route.params;
  //   console.log(props.route.params.category);
  return (
    <SafeAreaView>
      <View style={style.view1}>
        <Text style={{fontWeight: '700'}}>Hasil Pencarian</Text>
        <Text style={{fontSize: 20, fontWeight: '700', color: green}}>
          Kategory {category}
        </Text>
      </View>
      <ScrollView
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
        }}>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <View style={style.Layout}>
            {[1, 2, 3, 4, 5, 6, 7].map(book => (
              <TouchableOpacity key={book}>
                <CardBook
                  imageProp={require('../../assets/images/coverbook1.jpg')}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
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
    width: '90%',
  },
});

export default DetailKategori;
