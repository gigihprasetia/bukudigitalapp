import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

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
    // <SafeAreaView>
    //   <View
    //     style={{
    //       width: '100%',
    //       height: 200,
    //       display: 'flex',
    //       flexDirection: 'row',
    //       alignItems: 'center',
    //       paddingHorizontal: 10,
    //     }}>

    //     <TouchableOpacity
    //       onPress={() => prevImages()}
    //       style={{
    //         position: 'absolute',
    //         color: 'white',
    //         zIndex: 10,
    //         left: 20,
    //       }}>
    //       <AntDesign size={25} color={'white'} name="leftcircle" />
    //     </TouchableOpacity>

    //     <Image
    //       style={{width: '100%', height: '100%', borderRadius: 20}}
    //       source={{
    //         uri: images[indexImages],
    //       }}
    //     />
    //     <TouchableOpacity
    //       onPress={() => nextImages()}
    //       style={{
    //         position: 'absolute',
    //         color: 'white',
    //         zIndex: 10,
    //         right: 20,
    //       }}>
    //       <AntDesign size={25} color={'white'} name="rightcircle" />
    //     </TouchableOpacity>
    //   </View>

    // </SafeAreaView>
    <View>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={1}
        showPagination
        data={images}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: Dimensions.get('window').width,
                paddingHorizontal: Dimensions.get('window').width * 0.05,
              }}>
              <Image
                style={{
                  // width: Dimensions.get('window').width,
                  height: 200,
                  borderRadius: 20,
                }}
                source={{uri: item}}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

// const Style = StyleSheet.create({
//   view: ,
// });
export default Swipercompo;
