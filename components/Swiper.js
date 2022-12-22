import React, {useState} from 'react';
import {View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Swipercompo = () => {
  const [indexImages, setIndexImages] = useState(0);
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZwJmR8twc93gPkPOIQcMwpfumwtej4LgcA&usqp=CAU',
    'https://examstudyexpert.com/wp-content/uploads/2021/07/Motivational-Exam-Quotes-Vidal-Sassoon-1024x724.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhafW3m0PttREXHLr8ZYm6oSHheX-sT7b7pg&usqp=CAU',
  ];

  const nextImages = () => {
    if (indexImages != images.length - 1) {
      setIndexImages(indexImages + 1);
    } else {
      setIndexImages(0);
    }
  };
  const prevImages = () => {
    if (indexImages === 0) {
      setIndexImages(images.length - 1);
    } else {
      setIndexImages(indexImages - 1);
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: 200,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        {/* <Text>prev</Text> */}
        <TouchableOpacity
          onPress={() => prevImages()}
          style={{
            position: 'absolute',
            color: 'white',
            zIndex: 10,
            left: 20,
          }}>
          <AntDesign size={25} color={'white'} name="leftcircle" />
        </TouchableOpacity>
        {/* <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
            position: 'absolute',
            zIndex: 20,
          }}></View> */}
        <Image
          style={{width: '100%', height: '100%', borderRadius: 20}}
          source={{
            uri: images[indexImages],
          }}
        />
        <TouchableOpacity
          onPress={() => nextImages()}
          style={{
            position: 'absolute',
            color: 'white',
            zIndex: 10,
            right: 20,
          }}>
          <AntDesign size={25} color={'white'} name="rightcircle" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// const Style = StyleSheet.create({
//   view: ,
// });
export default Swipercompo;
