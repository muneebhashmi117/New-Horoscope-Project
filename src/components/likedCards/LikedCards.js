import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SVG } from '../../assets';
import { IMAGES } from '../../assets/images';
import { COLORS } from '../../enums/StyleGuide';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LikedCards = () => {
  return (
    
    <View style={styles.card}>
      <Text style={styles.available}>Available</Text>

      <View style={styles.imageview}>
        <Image source={IMAGES.THE_NADUS} style={styles.image} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Nodus <Text style={styles.topRated}>(Top Rated)</Text>
        </Text>

        <View style={styles.row}>
          <SVG.blacklocation />
          <Text style={styles.cuisine}> Italian</Text>
        </View>

        {/* Description + Button in same row */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Enjoy carefully crafted dishes and mocktails that bring out the best of Norwegian flavors.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reserve</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: wp(3),
    padding: wp(3),
    marginVertical: wp(),
    marginHorizontal: wp(4),
    shadowColor: COLORS.black,
    elevation: 0.6,
    flexDirection: 'row',
    position: 'relative',
    
  },
  imageview: {
    marginRight: wp(2.5),
  },
  image: {
    height: hp(10),
    width: wp(22),
    borderRadius: wp(1.8),
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: wp(3.5),
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  topRated: {
    fontSize: wp(2.5),
    color: '#888',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.5),
  },
  cuisine: {
    fontSize: wp(3),
    color: '#555',
    marginLeft: wp(1),
    fontFamily: 'Poppins-Regular',
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(0.8),
  },
  description: {
    fontSize: wp(2.5),
    color: '#777',
    fontFamily: 'Poppins-Regular',
    flex: 1,
    marginRight: wp(2),
  },
  available: {
    position: 'absolute',
    top: hp(1),
    right: wp(2),
    fontSize: wp(3),
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: COLORS.black,
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(4),
    borderRadius: wp(1.5),
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
    fontSize: wp(3),
  },
});

export default LikedCards;
