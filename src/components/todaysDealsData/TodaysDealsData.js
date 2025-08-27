import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/images';
import {COLORS} from '../../enums/StyleGuide';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; // optional for responsiveness

const TodaysDealsData = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      {/* Overlay content */}
      <View style={styles.overlay}>
        <Text style={styles.imageoverlaytext}>20% off till 5 PM</Text>
        <Pressable style={styles.reservebtn}>
          <Text style={styles.btnstext}>Reserve</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TodaysDealsData;


const styles = StyleSheet.create({
  container: {
    width: wp(50),
    height: hp(25),
    overflow: 'hidden',
    position: 'relative',
    marginVertical: hp(0.5),
    marginLeft:6,
  },
  image: {
    width: wp(48),
    height: hp(24),
    borderRadius:10,
  },
  overlay: {
    position: 'absolute',
    top: '55%',
    left: 0,
    height: '40%',
    // width: '100%',
    padding: wp(2),
    justifyContent: 'space-between',

  },
  imageoverlaytext: {
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2.2),
    color: COLORS.white,
  },
  reservebtn: {
    backgroundColor: COLORS.darkgrey,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(1.5),
    alignSelf: 'flex-start',
  },
  btnstext: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.white,
    fontSize: hp(1.6),
  },
});
