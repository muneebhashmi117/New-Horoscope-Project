import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {SVG} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ViewMoreBar = ({text}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.spottext}>{text}</Text>

        <Pressable style={styles.viewMoreWrapper}>
          <Text style={styles.ViewMore}>View more</Text>
          <SVG.viewallarrow width={wp(5.5)} height={wp(5.5)} />
        </Pressable>
      </View>
    </View>
  );
};

export default ViewMoreBar;


const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: hp(1.2),

  },
  spottext: {
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2.2),
  },
  ViewMore: {
    fontFamily: 'Poppins-Regular',
    marginRight: wp(0.1),
    fontSize: hp(1.4),
  },
  mainContainer: {
    paddingLeft: wp(8),
    paddingRight: hp(0.7),
    paddingTop: hp(0.7),
  },
  viewMoreWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: wp(1),
},

});
