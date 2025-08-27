import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../enums/StyleGuide';
import {StoreData} from '../../services/FireBaseServices';
import {SCREEN} from '../../enums';
import firestore from '@react-native-firebase/firestore';

import {Dropdown} from 'react-native-element-dropdown';
const Search = ({navigation}) => {
  const [Name, setName] = useState('');
  const [restaurant, setRestaurant] = useState(null); // 🔹 replace quantity with restaurant

  const [Details, setDetails] = useState('');

  const restaurantsList = [
    {label: 'Featured Spot', value: 'Featured Spot'},
    {label: 'Todays deals', value: 'Todays deals'},
    {label: 'Top Mzanzi Spot', value: 'Top Mzanzi Spot'},
  ];
  const handleOrder = async () => {
    if (!Name || !restaurant) {
      Alert.alert('Please fill the name and restaurant properly');
      return;
    }

    // Firestore me data bhejna
    try {
      await firestore()
        .collection('Restaurants') // main collection
        .doc(restaurant) // selected restaurant (category)
        .collection('New Resturant') // orders sub-collection
        .add({
          Name,
          Details,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });

      Alert.alert('✅ Resturant added Successfully');
      navigation.navigate(SCREEN.HOME_SCREEN);

      // reset inputs
      setName('');
      setRestaurant(null);
      setDetails('');
    } catch (error) {
      Alert.alert('❌ Failed to add returant', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {' '}
      <View style={styles.card}>
        {' '}
        <Text style={styles.title}>Name</Text>{' '}
        <TextInput
          placeholder="Enter Resturant id"
          value={Name}
          onChangeText={setName}
          style={styles.input}
          placeholderTextColor={COLORS.gray}
        />{' '}
        {/* 🔹 Restaurant Dropdown */}{' '}
        <Text style={styles.title}>Category</Text>{' '}
        <Dropdown
          style={styles.dropdown}
          data={restaurantsList}
          labelField="label"
          valueField="value"
          placeholder="Select Category"
          placeholderTextColor={COLORS.grey}
          value={restaurant}
          onChange={item => {
            setRestaurant(item.value);
          }}
        />{' '}
        <Text style={styles.title}>Details</Text>{' '}
        <TextInput
          placeholder="Resturant details"
          value={Details}
          onChangeText={setDetails}
          style={styles.input}
          placeholderTextColor={COLORS.gray}
        />{' '}
        <TouchableOpacity style={styles.confirmBtn} onPress={handleOrder}>
          {' '}
          <Text style={styles.confirmBtnText}>Add new Resturant</Text>{' '}
        </TouchableOpacity>{' '}
      </View>{' '}
    </View>
  );
};
export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray || '#f5f5f5',
    padding: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: COLORS.white || '#fff',
    width: '100%',
    borderRadius: wp(4),
    padding: wp(10),
    shadowColor: COLORS.black || '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: hp(2.5),
    fontFamily: 'Poppins-Regular',
    color: COLORS.darkText || '#333',
    marginTop: hp(1.5),
    marginBottom: hp(0.5),
  },
  input: {
    fontFamily: 'Poppins-Regular',
    borderWidth: wp(0.3),
    borderColor: COLORS.borderColor || '#ccc',
    borderRadius: hp(1),
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    fontSize: hp(2),
    color: COLORS.darkText || '#333',
  },
  confirmBtn: {
    backgroundColor: COLORS.darkgrey,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    marginTop: hp(3),
    borderRadius: hp(1),
  },
  confirmBtnText: {
    color: COLORS.white,
    fontSize: hp(2),
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  dropdown: {
    height: hp(6),
    borderColor: COLORS.borderColor || '#ccc',
    borderWidth: 1,
    borderRadius: hp(1),
    paddingHorizontal: wp(3),
    marginBottom: hp(1),
  },
  placeholderStyle: {fontSize: hp(2), color: COLORS.grey},
  selectedTextStyle: {fontSize: hp(2), color: COLORS.darkText || '#333'},
});
