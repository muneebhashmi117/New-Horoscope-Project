import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {SVG} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Spot = ({text}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.spottext}>{text} spot</Text>

        <Pressable>
          <Text style={styles.Viewall}>View all</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Spot;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(1.2),
    paddingTop:hp(2)
  },
  spottext: {
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2.2),
  },
  Viewall: {
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'underline',
    marginRight: wp(1),
    fontSize: hp(1.8),
  },
  mainContainer: {
    paddingLeft: wp(8),
    paddingRight: hp(0.7),
    paddingTop: hp(0.7),
  },
});
