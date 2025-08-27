import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import firestore from '@react-native-firebase/firestore';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../enums/StyleGuide';

const Rewards = () => {
  const [category, setCategory] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = [
    {label: 'Featured Spot', value: 'Featured Spot'},
    {label: 'Todays deals', value: 'Todays deals'},
    {label: 'Top Mzanzi Spot', value: 'Top Mzanzi Spot'},
  ];

  // Fetch restaurants when category changes
  useEffect(() => {
    if (category) {
      setLoading(true);
      const subscriber = firestore()
        .collection('Restaurants')
        .doc(category) //  jo category select hui
        .collection('New Resturant')
        .orderBy('createdAt', 'desc')
        .onSnapshot(snapshot => {
          if (!snapshot.empty) {
            const data = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            }));
            setRestaurants(data);
          } else {
            setRestaurants([]);
          }
          setLoading(false);
        });

      return () => subscriber();
    }
  }, [category]);

  return (
    <View style={styles.container}>
      {/* Dropdown for category */}
      <Dropdown
        style={styles.dropdown}
        data={categories}
        labelField="label"
        valueField="value"
        placeholder="Select Category"
        value={category}
        onChange={item => setCategory(item.value)}
      />

      {/* Show Restaurants */}
      {loading ? (
        <Text style={styles.info}>Loading...</Text>
      ) : restaurants.length > 0 ? (
        <FlatList
          data={restaurants}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.Name}</Text>
              <Text style={styles.detail}>{item.Details}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.info}>No restaurants found</Text>
      )}
    </View>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    padding: wp(5),
  },
  dropdown: {
    height: hp(6),
    borderColor: COLORS.borderColor || '#ccc',
    borderWidth: 1,
    borderRadius: hp(1),
    paddingHorizontal: wp(3),
    marginBottom: hp(2),
  },
  card: {
    backgroundColor: COLORS.white,
    padding: wp(4),
    borderRadius: wp(2),
    marginBottom: hp(1.5),
    elevation: 3,
  },
  name: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: COLORS.darkText,
  },
  detail: {
    fontSize: wp(3.8),
    color: COLORS.grey,
    marginTop: 4,
  },
  info: {
    textAlign: 'center',
    marginTop: hp(2),
    fontSize: wp(4),
    color: COLORS.darkText,
  },
});
