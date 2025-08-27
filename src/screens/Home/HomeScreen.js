import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import {
  SearchBar,
  Spot,
  TopBar,
  TheNadusCards,
  ViewMoreBar,
  TodaysDealsData,
  LikedCards,
} from '../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../enums/StyleGuide';
import {LIKED_DATA, TODAYSDEALS_DATA} from '../../dummies';
import { listenRestaurantsByCategory } from '../../services/FireBaseServices'; // 👈 realtime listener

const HomeScreen = ({navigation}) => {
  const [featuredData, setFeaturedData] = useState([]);
  const [mzansiData, setMzansiData] = useState([]);

  // 🔹 Fetch Featured + Mzansi data realtime
  useEffect(() => {
    const unsubscribeFeatured = listenRestaurantsByCategory('Featured Spot', setFeaturedData);
    const unsubscribeMzansi = listenRestaurantsByCategory('Top Mzanzi Spot', setMzansiData);

    return () => {
      unsubscribeFeatured();
      unsubscribeMzansi();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <FlatList
        data={LIKED_DATA}
        renderItem={({item}) => <LikedCards />}
        keyExtractor={(_, index) => index.toString()}
        style={styles.container}
        ListHeaderComponent={
          <>
            <Text style={styles.naami}>Naami</Text>
            <TopBar />
            <SearchBar />

            {/* Featured Spot */}
            <Spot text={'Featured'} />
            <FlatList
              data={featuredData}
              renderItem={({item}) => (
                <TheNadusCards name={item.Name} details={item.Details} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.flatList}
              contentContainerStyle={styles.flatListContainer}
            />

            {/* Today’s Deals */}
            <ViewMoreBar text={"Today’s Deals"} />
            <FlatList
              data={TODAYSDEALS_DATA}
              renderItem={({item}) => <TodaysDealsData image={item.image} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.flatList}
              contentContainerStyle={styles.flatListContainer}
            />

            {/* Top Mzansi Spots */}
            <ViewMoreBar text={'Top Mzansi Spots'} />
            <FlatList
              data={mzansiData}
              renderItem={({item}) => (
                <TheNadusCards name={item.Name} details={item.Details} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.flatList}
              contentContainerStyle={styles.flatListContainer}
            />

            <Text style={styles.liked}>Because you liked</Text>
          </>
        }
        contentContainerStyle={{paddingBottom: hp(7.1)}}
      />
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  naami: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(3),
    marginBottom: hp(3),
    marginTop: hp(3),
    paddingHorizontal: wp(5),
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  flatList: {
    paddingLeft: wp(4),
  },
  flatListContainer: {
    gap: wp(4),
    paddingRight: wp(4),
  },
  liked: {
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2.7),
    paddingHorizontal: wp(5),
    paddingTop: hp(1),
  },
});
