import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const KategoriScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Style.container}>
          {['Umum', 'Novel', 'Fiksi', 'SD', 'SMP', 'SMA / SMK'].map(
            category => (
              <TouchableOpacity key={category} style={Style.cardCate}>
                <Text>{category}</Text>
                <Ionicons name="md-arrow-redo-outline" size={20} />
              </TouchableOpacity>
            ),
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  cardCate: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});
export default KategoriScreen;
