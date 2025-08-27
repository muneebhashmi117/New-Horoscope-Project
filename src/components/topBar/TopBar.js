import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SVG} from '../../assets';
import {COLORS} from '../../enums/StyleGuide';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TopBar = () => {
  return (
    <View style={styles.container}>
      {/* Date Button */}
      <TouchableOpacity style={styles.button}>
        <SVG.calender width={wp(4)} height={hp(2)} />
        <Text style={styles.text}>Date</Text>
        <SVG.downarrow width={wp(3.8)} height={hp(1.8)} />
      </TouchableOpacity>

      {/* Location Button */}
      <TouchableOpacity style={styles.button}>
        <SVG.location width={wp(4.2)} height={hp(2)} />
        <Text style={styles.text2}>Riverside • 1.2 miles away</Text>
        <SVG.downarrow width={wp(3.8)} height={hp(1.8)} />
      </TouchableOpacity>

      {/* Round filter button */}
      <TouchableOpacity style={styles.filterbtn}>
        <SVG.filter width={wp(5)} height={hp(2.5)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(2),
    borderRadius: wp(1),
    marginRight: wp(0.5),
  },
  text: {
    color: COLORS.white,
    marginHorizontal: wp(1.5),
    marginRight: wp(5),
    fontFamily: 'Poppins-Regular',
    fontSize: hp(1.3),
    marginTop: hp(0.5),
  },
  text2: {
    color: COLORS.white,
    marginHorizontal: wp(1.5),
    fontFamily: 'Poppins-Regular',
    fontSize: hp(1.2),
    marginTop: hp(0.5),
  },
  filterbtn: {
    width: hp(3.5),
    height: hp(3.5),
    borderRadius: hp(2.5),
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    marginLeft: 'auto',
  },
});

export default TopBar;
