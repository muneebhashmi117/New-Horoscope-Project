import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SVG} from '../../assets';
import {COLORS} from '../../enums/StyleGuide';

const TheNadusCards = ({name, details}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <SVG.featuresNolo width={wp(8)} height={hp(5)} style={styles.icon} />
        {/* Static image sab cards ke liye same */}
        <Image source={IMAGES.THE_NADUS} style={styles.image} />
      </View>

      {/* Title */}
      <Text style={styles.titleText}>
        The Nadus
        <Text style={styles.star}>★</Text>
        <Text style={styles.rating}>(4.6)</Text>
      </Text>

      {/* Location -> ab yahan restaurant ka name show hoga */}
      <View style={styles.location}>
        <SVG.blacklocation width={wp(4)} height={hp(2)} styles={styles.locsvg} />
        <Text style={styles.locationtext}>{name}</Text>
      </View>

      {/* Loadshedding -> ab yahan restaurant ka details show hoga */}
      <View style={styles.loadshedding}>
        <SVG.loadshedding
          width={wp(4)}
          height={hp(2)}
          styles={styles.loadsedsvg}
        />
        <Text style={styles.loadsheddingtext}>{details}</Text>
      </View>

      {/* Neechy description optional */}
      <Text style={styles.description}>{details}</Text>

      <View style={styles.reservebtn}>
        <Text style={styles.reserveText}>Reserve</Text>
        <SVG.viewallarrow
          width={wp(5)}
          height={wp(5)}
          style={styles.reservebtnicon}
        />
      </View>
    </View>
  );
};

export default TheNadusCards;

const styles = StyleSheet.create({
  container: {
    width: wp(50),
    height: wp(75),
    borderWidth: 1,
    borderColor: COLORS.lightestGrey,
    padding: 10,
    borderRadius: 4,
  },
  imageWrapper: {
    position: 'relative',
    width: wp(45),
    height: hp(14),
  },
  image: {
    width: wp(44),
    height: hp(14),
    borderRadius: wp(1.5),
  },
  icon: {
    position: 'absolute',
    top: hp(-0.5),
    left: wp(1),
    zIndex: 1,
  },
  titleText: {
    fontSize: hp(1.5),
    fontFamily: 'Poppins-Bold',
    marginTop: hp(0.8),
  },
  star: {
    color: COLORS.yellow,
    fontSize: hp(1.8),
  },
  rating: {
    fontFamily: 'Poppins-Regular',
  },
  location: {
    flexDirection: 'row',
    gap: wp(1),
    alignItems: 'center',
    marginBottom: hp(0.7),
  },
  locationtext: {
    color: COLORS.grey,
    fontFamily: 'Poppins-Regular',
    fontSize: hp(1.2),
  },
  loadshedding: {
    flexDirection: 'row',
    gap: wp(2),
    alignItems: 'center',
    marginBottom: hp(0.5),
  },
  loadsheddingtext: {
    color: COLORS.grey,
    fontFamily: 'Poppins-Regular',
    fontSize: hp(1.2),
  },
  description: {
    fontSize: wp(2.7),
    fontFamily: 'Poppins-Regular',
    color: COLORS.grey,
  },
  reservebtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(1),
  },
  reservebtnicon: {
    marginTop: hp(0.4),
  },
});
